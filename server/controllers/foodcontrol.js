import fs from "fs"
import fashionmodel from "../models/fashionmodel.js"
import {v2 as cloudinary} from "cloudinary"
cloudinary.config({
    cloud_name:process.env.cloudinaryname,
    api_key:process.env.cloudinaryapikey,
    api_secret:process.env.cloudinaryapisecret,
})
const additem=async(req,res)=>{
    try {
         if(!req.file){
       return  res.json({status:false,result:"ADD IMAGE "})
    }
    
   
    const {name,description,price,category}=req.body;
    if(!name||!description||!price||!category){
        return res.json({status:false,result:"ALL FIELDS ARE REQUIRED"});
    }
    // cloudinary
    const result=await cloudinary.uploader.upload(req.file.path,{
        folder:"uploads",
    })
    const fashionstore=new fashionmodel({
        name,
        description,
        price:Number(price),
        category,
        localfile:req.file.filename,
        image:result.secure_url,
        public_id:result.public_id
    })
    
        await fashionstore.save();
      return   res.json({status:true,result:"PRODUCT ADDED SUCCESSFULLY"})
        
    } catch (error) {
        console.log("add item error ",error);
      return  res.json({status:false,result:"ADD ITEM ERROR "});
        
    }

}
const getitem=async(req,res)=>{
    try {
        const products=await fashionmodel.find({});
        res.json({status:true,ans:products});
        console.log(products);
        
    } catch (error) {
        console.log(error);
        res.json({status:false,result:"GET ITEM ERROR "});
        
    }

}
const deleteitem=async(req,res)=>{
    try {
        const fproduct=await fashionmodel.findById(req.body.id);
      if(!fproduct){
    return  res.json({success:false,result:"PRODUCT NOT FOUND"});

        }
        if(fproduct){
            fs.unlink(`uploads/${fproduct.localfile}`,()=>{});

        }
         console.log("this is public id ",fproduct.public_id);
    if(fproduct.public_id){
           
            await cloudinary.uploader.destroy(fproduct.public_id);

        }
        
        await fashionmodel.findByIdAndDelete(req.body.id);
         res.json({success:true,result:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
         res.json({success:false,result:"DATA DELETE ERROR"});
        
    }

}
export {additem,getitem,deleteitem}