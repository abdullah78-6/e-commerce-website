const register=async(req,res)=>{
    const {name,email,password}=req.body;
    console.log("FOR ACCOUNT CRATION ",name,email,password);

}
const login=async(req,res)=>{
    const {email,password}=req.body;
    console.log("READY TO USE SIGN IN ",email,password);

}
export {register,login}