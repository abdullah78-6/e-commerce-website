import jwt from "jsonwebtoken";
const authmiddleware=async(req,res,next)=>{
    const {token}=req.headers;
    if(!token){
        return res.json({status:false,result:"NOT AUTHORIZED LOGIN AGAIN "});
    }
    try {
        const tokendecode=jwt.verify(token,process.env.jwtsecret);
        if(!req.body){
            req.body={};
        }
        req.body.userid=tokendecode.id;
        // req.userid=tokendecode.id; gate  
        next();
        
    } catch (error) {
        console.log(error);
        res.json({status:false,result:"ERROR"});
        
    }

}
export default authmiddleware;