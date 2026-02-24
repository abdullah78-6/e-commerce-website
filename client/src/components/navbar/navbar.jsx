import {useDispatch, useSelector} from "react-redux"
import { control } from "../../store/slice.js";
import { FaCartShopping } from "react-icons/fa6";
import { manage } from "../../store/products-slice.js";
import {Link} from "react-router-dom"
function Navbar(){
    const dispatch=useDispatch();
    const finalnavclass=useSelector(state=>state.main.navclass);
    const loginstatus=useSelector(state=>state.main.login);
    function change(classname){
        dispatch(control.setnavclass(classname));
        console.log(finalnavclass);
    }
    function updateloginstatus(status){
        dispatch(control.setlogin(status));
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
            <div>
            <Link to="/cart" className="text-3xl text-pink-900"><FaCartShopping /></Link>
            </div>
            <button onClick={()=>updateloginstatus(true)} className="text-2xl capitalize rounded-4xl border border-pink-600  text-pink-600 p-2 hover:bg-pink-600 hover:text-white">log-in</button>
            
        </div>
       
    </div>

}
export default Navbar;