import {useDispatch, useSelector} from "react-redux"
import { control } from "../../store/slice.js";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import axios from "axios"
import {toast} from "react-toastify"
function Signin(){
    const dispatch=useDispatch();
    const loginboolvalue=useSelector(state=>state.main.login);
    const logintype=useSelector(state=>state.main.statelog);
    const inputtype=useSelector(state=>state.main.input);
    const logindatastructure=useSelector(state=>state.main.logindata);
    const url="http://localhost:8000"
    function loginstatuschange(status){
        dispatch(control.setlogin(false));;
    }
    function logintypechange(type){
        dispatch(control.setstatelog(type));
    }
    function changeinginp(type){
        dispatch(control.setinput(type));
}
function Onchangehandler(event){
    dispatch(control.setloginds({
        name:event.target.name,
        value:event.target.value
    }))
 

}
const onlogin=async(event)=>{
    event.preventDefault();
    let newurl=url;
    if(logintype==="signin"){
        // set login api url
        newurl=newurl+"/api/auth/signin"
        dispatch(control.setprofileicon(true));
      

    }
    else{
        // set signup api url
        newurl=newurl+"/api/auth/signup"
    }
    try{
        const response=await axios.post(newurl,logindatastructure);
    if(response.data.status){
          
        dispatch(control.settoken(response.data.token));
        dispatch(control.setbackendemail(response.data.email));
        localStorage.setItem("token",response.data.token);
        toast.success(response.data.result);
        
    }
    else{
        toast.error(response.data.result);
    }

    }
    catch(err){
        toast.error("SERVER ERROR");

    }
    

}
    return <div className="inset-0 fixed flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm  ">
    
        <form className="flex flex-col gap-6 shadow-2xl w-[420px] bg-white rounded-3xl  p-7"onSubmit={onlogin} >
             <div className="relative">
            <h1 className="cursor-pointer absolute text-3xl text-red-500 bottom-1 top-4 right-6" onClick={()=>loginstatuschange(false)}>X</h1>
        </div>
        {logintype!=="signin"?<div className="flex flex-col  gap-4 " >
            <div>
            <label className="text-lg font-semibold text-pink-900" htmlFor="name">ENTER-NAME</label>
            </div>
            <div>
            <input name="name" onChange={Onchangehandler} value={logindatastructure.name} className=" border border-pink-500 p-2 rounded-3xl text-2xl text-gray-700"  type="text"placeholder="enter-name"required/>
            </div>
            
            


        </div>:<></>
       }
       <div className="flex flex-col  gap-4">
            <div>
            <label className="text-lg font-semibold text-pink-900" htmlFor="email">ENTER-EMAIL</label>
            </div>
            <div>
            <input name="email" onChange={Onchangehandler} value={logindatastructure.email} className=" border border-pink-500 p-2 rounded-3xl text-2xl text-gray-700" type="text"placeholder="enter-email" required/>
            </div>
        </div>
        

        <div className="flex flex-col  gap-4">
            <div>
            <label className="text-lg font-semibold text-pink-900" htmlFor="password">ENTER-PASSWORD</label>
            </div>
            <div className="flex gap-3 items-center">
            <input name="password" onChange={Onchangehandler} value={logindatastructure.password} className=" border border-pink-500 p-2 rounded-3xl text-2xl text-gray-700" type={inputtype}placeholder="enter-password" required/>
            {inputtype==="text"?<FaRegEye className="text-2xl text-pink-800" onClick={()=>changeinginp("password")}/>:<FaEyeSlash className="text-2xl text-pink-800" onClick={()=>changeinginp("text")}/>}
            </div>
        </div>
            <div>
                {logintype==="signin"?<p className="text-xl w-90 capitalize text-pink-600">I accepted the given terms and condetions </p>:<></>}
                {logintype==="signin"?<input className="" type="checkbox" required/>:<></>}
            </div>
            <div>
         {logintype==="signup"?<button type="submit" className="bg-pink-600 hover:bg-pink-900  text-white p-3 rounded-4xl">CREATE AN ACCOUNT</button>:<button type="submit" className="bg-pink-600 hover:bg-pink-900  text-white p-3 rounded-4xl">SIGN-IN</button>}   
         </div>
         <div>
        
            {logintype==="signup"?<p className=" text-lg font-semibold text-pink-900">ALREADY HAVE AN ACCOUNT <span className="text-pink-600 hover:underline hover:text-pink-900" onClick={()=>logintypechange("signin")}>Login</span></p>:<p className="text-lg font-semibold text-pink-900">DONT HAVE AN ACCOUNT <span onClick={()=>logintypechange("signup")} className="text-pink-600 hover:underline hover:text-pink-900">Sign-up</span></p>}
            </div>
        
        
        </form>
        
        
    </div>

}
export default Signin;