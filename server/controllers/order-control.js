import axios from "axios"
import ordermodel from "../models/order-model.js";
import usermodel from "../models/usermodel.js";
import { Cashfree, CFEnvironment } from "cashfree-pg";
import Instamojo from "instamojo-nodejs"
const getorder3=async(req,res)=>{
    // CODE IS CORRECT BUT DUE TO API KEY ISSUE WE ARE NOT USING PAYMENT GATEWAY 
    // const {name,email,address,city,pincode,landmark,phonenumber}=req.body;
    // cashfree
    
    // const appid=process.env.CASHFREE_APPID;
    // const secretkey=process.env.CASHFREE_SECRETKEY;
    
    // const frontendurl="http://localhost:5173";
    // try {
    //     const userid=req.body.userid;
    //     const neworder=new ordermodel({
    //         // userid:req.body.userid,
    //         userid:userid,
    //         items:req.body.items,
    //         amount:req.body.amount,
    //         address:req.body.address

    //     })
    //     await neworder.save();
    //     await usermodel.findByIdAndUpdate(userid,{cartdata:{}});
    //     const orderrequest={
    //         order_amount:req.body.amount.toString(),
    //         order_currency:"INR",
    //         order_id:neworder._id.toString(),
    //         customer_details:{
    //             customer_id:userid,
    //             customer_name:req.body.address.name,
    //             customer_email:req.body.address.email,
    //             customer_phone:req.body.address.phonenumber
    //         },
    //         order_meta:{
    //             return_url:`${frontendurl}/verify?orderid=${neworder._id}&success=true`
    //         }

    //     };
    //     const client=new Cashfree({
    //         env:CFEnvironment.SANDBOX,
    //         clientId:process.env.CASHFREE_APPID,
    //         clientSecret:process.env.CASHFREE_SECRETKEY
    //     })
    //     const response=await client.PGCreateOrder(orderrequest);
        // const response=await axios.post(
        //     "https://sandbox.cashfree.com/pg/orders",
        //     orderrequest,
        //     {
        //         headers:{
        //             "x-client-id": process.env.CASHFREE_APPID,
        //   "x-client-secret": process.env.CASHFREE_SECRETKEY,
        //   "x-api-version": "2023-08-01",
        //   "Content-Type": "application/json"

        //         }
        //     }
        // )
        // const sessionurl=response.data.payment_link;
        
        // const sessionurl = `https://sandbox.cashfree.com/pg/view/order/${neworder._id}`;
        // if(!paymentsessionid){
        //     return res.json({success:false,message:"PAYMENT SESSION NOT CREATED "});
        // }
        // res.json({success:true,sessionurl});
      
        
    // } catch (error) {
        // console.log(error);
        // res.json({success:false,message:"ERROR"});
        
    // }
}
const getorder=async(req,res)=>{
try {
        const userid=req.body.userid;
        const neworder=new ordermodel({
            // userid:req.body.userid,
            userid:userid,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address

        })
        await neworder.save();
        await usermodel.findByIdAndUpdate(userid,{cartdata:{}});
        const paymenturl = "https://cdn.dribbble.com/userupload/17706845/file/original-019a342281dda2d16dd05d605ca2c147.png?resize=752x&vertical=center";
        res.json({success:true,sessionurl:paymenturl});
    
}
catch(error){
    console.log(error);
    res.json({success:false,message:"ERROR"});

 }
}

const verifyorder=async(req,res)=>{
    const {orderid,success}=req.body;
    try {
        if(success=="true"){
            await ordermodel.findByIdAndUpdate(orderid,{payment:true});
            res.json({success:true,message:"PAYMENT SUCESSFUL"});
        }
        else{
            await ordermodel.findByIdAndDelete(orderid);
            res.json({success:false,message:"PAYMENT IS NOT SUCESSFUL"});
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"verify order error"});
        
    }
    


}
const updatestatus=async(req,res)=>{

}
const getclientorders=async(req,res)=>{

}
const getadminorder=async(req,res)=>{

    }
export {getorder,verifyorder,updatestatus,getclientorders,getadminorder}