import usermodel from "../models/usermodel.js"
const increaseitem=async(req,res)=>{
    try {
        let userdata=await usermodel.findById(req.body.userid);
        let cartdata=await userdata.cartdata;
        if(!cartdata[req.body.itemid]){
            cartdata[req.body.itemid]=1;
        }
        else{
            cartdata[req.body.itemid]+=1;
        }
        await usermodel.findByIdAndUpdate(req.body.userid,{cartdata});
        res.json({status:true,result:"ITEM ADDED IN CART "});
        
    } catch (error) {
        console.log(error);
        res.json({status:false,result:"ADD TO CART ERROR "});
        
    }
    

}
const decreaseitem=async(req,res)=>{
    try {
        let userdata=await usermodel.findById(req.body.userid);
        let cartdata=await userdata.cartdata;
        if(cartdata[req.body.itemid]>0){
            cartdata[req.body.itemid]-=1;
        }
        await usermodel.findByIdAndUpdate(req.body.userid,{cartdata});
        res.json({status:true,result:"ITEM REMOVED FROM CART "});
        
    } catch (error) {
        console.log(error);
        res.json({status:false,result:"REMOVED FROM CART ERROR "});
        
    }

}
const getitem=async(req,res)=>{
    try {
        let userdata=await usermodel.findById(req.body.userid);
        let cartdata=await userdata.cartdata;
        res.json({status:true,cartdata});
        
    } catch (error) {
        console.log(error);
        res.json({status:false,result:"GET ITEM FROM CART ERROR "});
    }

}
export {increaseitem,decreaseitem,getitem}