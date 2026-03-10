const getorder=async(req,res)=>{
    const {name,email,address,city,pincode,landmark,phonenumber}=req.body;
    console.log("ORDER DETAILS FROM FRONTEND",name,email,address,city," ",pincode,landmark,phonenumber);

}
export {getorder}