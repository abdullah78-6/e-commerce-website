import { Link, useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
function Sidebar(){
    const navigate=useNavigate();
    const sideclass=useSelector(state=>state.ainfo.class);
    const dispatch=useDispatch();
    
    return <div className="bg-pink-400 min-h-screen w-70   text-center overflow-auto font-semibold">
        
        
        <div className="flex flex-col justify-center items-center gap-30 cursor-pointer ">
            <hr />
            
            <div>
                <Link to="/add" onClick={()=>dispatch(control.setclass("add"))} className={`border-2 p-4 px-20 capitalize text-2xl  text-white ${sideclass=="add"?"bg-orange-300 text-gray-800":""}`} >add item</Link>
            </div>
            <div>
                <Link to="/list" onClick={()=>dispatch(control.setclass("list"))} className={`border-2 p-4 px-20 capitalize text-2xl  text-white ${sideclass=="list"?"bg-orange-300 text-gray-800":""}`}  >item list</Link>
            </div>
            <div>
                <Link to="/order" onClick={()=>dispatch(control.setclass("order"))} className={`border-2 p-4 px-20 capitalize text-2xl  text-white ${sideclass=="order"?"bg-orange-300 text-gray-800":""}`} >orders</Link>
            </div>
        </div>
    </div>

}
export default Sidebar;