import { useDispatch, useSelector } from "react-redux";
import { control } from "../../redux/slice";
import axios from "axios"
import {ToastContainer,toast} from "react-toastify";
const Login=()=>{
const dispatch=useDispatch();
    const logs=useSelector(state=>state.ainfo.logs);
    const onchangehandler=(event)=>{
        dispatch(control.setlogs({
            name:event.target.name,
            value:event.target.value

    }))
   

    }
    const login=async(e)=>{
        const apiurl="https://e-commerce-website-main-server.onrender.com/api/admin/sig";
        e.preventDefault();
        try {
            const response=await axios.post(apiurl,logs);
                
            if(response.data.status){

            
            localStorage.setItem("admintoken",response.data.token);
            dispatch(control.settoken(response.data.token));
            toast.success(response.data.result);
            }
            else{
                toast.error(response.data.result);
            }
            
            
        } catch (error) {
        toast.error("SERVER ERROR");
            
        }
        

    }
return <div className="inset-0 fixed flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm  ">
    
        <form className="flex flex-col gap-6 shadow-2xl w-[300px] md:w-[420px] xl:w-[420px] lg:w-[420px] bg-white rounded-3xl  p-7"onSubmit={login} >
             <div className="relative">
            <h1 className="cursor-pointer absolute text-3xl text-red-500 bottom-1 top-4 right-6" onClick={()=>dispatch(control.setlogin(false))} >X</h1>
        </div>
       <div className="flex flex-col  gap-4">
            <div>
            <label className="text-lg font-semibold text-pink-900" htmlFor="email">ENTER-EMAIL</label>
            </div>
            <div>
            <input name="email" onChange={onchangehandler} value={logs.email} className=" border border-pink-500 p-2 rounded-3xl text-2xl text-gray-700 w-50 md:w-auto lg:w-auto xl:w-auto" type="text"placeholder="enter-email" required/>
            </div>
        </div>
        

        <div className="flex flex-col  gap-4">
            <div>
            <label className="text-lg font-semibold text-pink-900" htmlFor="password">ENTER-PASSWORD</label>
            </div>
            <div className="flex gap-3 items-center">
            <input name="password" onChange={onchangehandler} value={logs.password}   className=" border border-pink-500 p-2 rounded-3xl text-2xl text-gray-700 w-50 md:w-auto lg:w-auto xl:w-auto" placeholder="enter-password" required type="password"/>
            
            </div>
        </div>
            <div>
                <p className="text-xl w-90 capitalize text-pink-600">I accepted the given terms and condetions </p>
                <input className="" type="checkbox" required/>
            </div>
            <div>
        <button type="submit" className="bg-pink-600 hover:bg-pink-900  text-white p-3 rounded-4xl">SIGN-IN</button>   
         </div>
         <div>
        
        
            </div>
        
        
        </form>
        
        
    </div>

}
export default Login;
