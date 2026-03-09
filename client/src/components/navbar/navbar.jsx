import {useDispatch, useSelector} from "react-redux"
import { control } from "../../store/slice.js";
import { FaCartShopping } from "react-icons/fa6";
import { manage } from "../../store/products-slice.js";
import {Link} from "react-router-dom"
import { productlist } from "../../assests/index.js";
import { useEffect } from "react";
import {toast} from "react-toastify"

function Navbar(){
    const dispatch=useDispatch();
    const finalnavclass=useSelector(state=>state.main.navclass);
    const token=useSelector(state=>state.main.token);
    const loginstatus=useSelector(state=>state.main.login);
    const carttotal=useSelector(state=>state.main2.totalprice);
    const cartdetails=useSelector(state=>state.main2.cartdetails);
    const productid=useSelector(state=>state.main2.productid);
    const totalquantity=useSelector(state=>state.main2.totalquantity);
    const profileicon=useSelector(state=>state.main.profileicon);
    const backendemail=useSelector(state=>state.main.backendemail);
    useEffect(()=>{
        dispatch(manage.settotalquantity());

    },[cartdetails])
    useEffect(()=>{
        const load=(e)=>{
           
            
            const tok=localStorage.getItem("token");
            const eml=localStorage.getItem("email");
             dispatch(control.settoken(tok));
            dispatch(control.setbackendemail(eml));
                 }
     load();
},[token,backendemail]);
    function change(classname){
        dispatch(control.setnavclass(classname));
        console.log(finalnavclass);
    }
    function updateloginstatus(status){
        dispatch(control.setlogin(status));
    }
    const logout=(e)=>{
        if(e==="Logout"){
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            dispatch(control.setbackendemail(""));
            dispatch(control.setprofileicon(false));
            dispatch(control.settoken(""));
            toast.error("USER LOGOUT SUCCESSFULLY");
        }

    }
    return <div className="flex justify-between items-center  shadow-2xl p-4 cursor-pointer font-semibold">
        <div>
            
            
            <h1 className="text-4xl text-gray-800">CLOTHES-<span className="text-pink-600">SHOP</span></h1>
    

        </div>
        <ul className="mt-0 flex  justify-center items-center gap-12 capitalize text-xl cursor-pointer text-gray-800">
            <li onClick={()=>change("home")} className={finalnavclass==="home"?"border-b-4 border-b-pink-600":""}>home</li>
            <li onClick={()=>change("contact-us")} className={finalnavclass==="contact-us"?"border-b-4 border-b-pink-600":""}>contact-us</li>
            <li onClick={()=>change("mobile-app")} className={finalnavclass==="mobile-app"?"border-b-4 border-b-pink-600":""}>mobile-app</li>
            <li onClick={()=>change("products")} className={finalnavclass==="products"?"border-b-4 border-b-pink-600":""}>products</li>
        </ul>
        <div className="flex justify-center items-center gap-6" >
             
            <div >
                    
            <Link to="/cart" className="text-3xl relative text-pink-900">
            <h1 className="mt-3"><FaCartShopping /></h1>
            {carttotal===0?"":
            <div className="bg-pink-600 absolute w-7 h-7 p-4   bottom-6.5 top-0.7 rounded-4xl left-5">
             
                
                
                     <h1 className="absolute text-xl text-yellow-300 bottom-0 left-1 top-[-0.5px] ml-1 font-semibold  ">{totalquantity}</h1>
                
                
                </div>}
            </Link>

            </div>
            <div className="flex justify-center items-cnter">
                <div>
         {token?<div className="flex gap-5"  >
            <h1  className="bg-white p-4 rounded-4xl py-2 text-gray-900  border-2 border-pink-700 text-lg ">{backendemail?backendemail.slice(0,1):""}</h1>
            <select className="mt-3" onChange={(e)=>logout(e.target.value)}>
                <option  value="orders">Orders</option>
                <option  value="Logout">Logout</option>
            </select>

         </div>
         
         :<button onClick={()=>updateloginstatus(true)} className="text-2xl capitalize rounded-4xl border border-pink-600  text-pink-600 p-2 hover:bg-pink-600 hover:text-white">log-in</button>}      
         </div>
         </div>
            
        </div>
       
    </div>

}
export default Navbar;