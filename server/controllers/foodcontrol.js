import fs from "fs"
import fashionmodel from "../models/fashionmodel.js"
const additem=async(req,res)=>{
    try {
         if(!req.file){
       return  res.json({status:false,result:"ADD IMAGE "})
    }
    
   
    const {name,description,price,category}=req.body;
    if(!name||!description||!price||!category){
        return res.json({status:false,result:"ALL FIELDS ARE REQUIRED"});
    }
    const fashionstore=new fashionmodel({
        name,
        description,
        price:Number(price),
        category,
        image:req.file.filename
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
        fs.unlink(`uploads/${fproduct.image}`,()=>{});
        await fashionmodel.findByIdAndDelete(req.body.id);
        res.json({success:true,result:"DATA DELETED SUCESSFULLY "});
        
    } catch (error) {
        console.log("delete error",error);
        res.json({success:false,result:"DATA DELETE ERROR"});
        
    }

}
export {additem,getitem,deleteitem}