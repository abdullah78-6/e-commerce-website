import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
import { useEffect } from "react";
function Navbar(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const token=useSelector(state=>state.ainfo.token);
    useEffect(()=>{
       const loadadmin=()=>{
        const finaltoken=localStorage.getItem("admintoken");
        if(finaltoken){
            dispatch(control.settoken(finaltoken));
         }
    }
       loadadmin();
},[]);
    const logout=()=>{
        localStorage.removeItem("admintoken");
        dispatch(control.settoken(""));

    }
    return <div className="bg-pink-400 capitalize font-semibold text-gray-900  px-8 py-8 min-w-3xl ">
        <div className="flex flex-col justify-center items-start cursor-pointer">
        <div>
            
        <Link to="/" onClick={()=>dispatch(control.setclass(""))} className="text-3xl text-orange-100">CLOTHES-<span className="text-orange-100">SHOP</span></Link>
        </div>
        
        <div>
            <p className="text-gray-800 text-xl">admin-panel</p>
        </div>
        </div>
        <ul className="flex justify-center items-center  gap-10 lg:hidden xl:hidden capitalize text-xl">
            <Link className="hover:underline text-blue-600" to="/add">add</Link>
            <Link className="hover:underline text-blue-600" to="/list">item-list</Link>
            <Link className="hover:underline text-blue-600" to="/order">orders</Link>
        </ul>
        
        <ul className="flex  justify-end items-center flex-wrap ">
         {token?   <li className="flex flex-wrap">
                <img src="src\assets\profile_image.png" alt="profile image"/>
                
            </li>
            :<></>}
            {!token?<button className=" border   border-pink-800 bg-white p-2 rounded-2xl text-pink-900 hover:bg-pink-900 hover:text-white capitalize"onClick={()=>dispatch(control.setlogin(true))} >signin</button>:<button className=" border  border-pink-800 bg-yellow-300 p-2 ml-4 rounded-2xl text-pink-900 hover:bg-pink-900 hover:text-white capitalize" onClick={logout}>Logout</button>}
        </ul>
        

        
    </div>


}
export default Navbar;