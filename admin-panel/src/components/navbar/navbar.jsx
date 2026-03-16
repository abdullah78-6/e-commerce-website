import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
function Navbar(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
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
        
        <ul className="flex justify-end items-center ">
            <li className="">
                <img src="src\assets\profile_image.png" alt="profile image"/>
            </li>
        </ul>

        
    </div>


}
export default Navbar;