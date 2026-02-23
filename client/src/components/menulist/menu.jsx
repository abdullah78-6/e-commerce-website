import { menulist } from "../../assests";
import {useDispatch, useSelector} from "react-redux"
import { control } from "../../store/slice.js";

function Menu(){
    const dispatch=useDispatch();
    const finalcategory=useSelector(state=>state.main.category);
  
    return <div className="flex flex-col font-semibold">
        <div className="mt-20">
            <h1 className="text-pink-600 text-center text-5xl">TOP PRODUCTS CATEGORY </h1>
        </div>
        <div>
            <h1 className="text-3xl capitalize mt-3 text-center">preimum outfits</h1>
        </div>
        <div className="mt-10 flex justify-center items-center gap-10 flex-wrap">
            {menulist.map((i,index)=>(
                <div onClick={()=>dispatch(control.setcategory(finalcategory===i.menuname?"ALL":i.menuname))} className="shadow-2xl p-3 rounded-2xl shadow-pink-400 hover:scale-110 transition ease-in-out duration-200" key={index} >
              <img className={`transition ease-in-out duration-200 border-6 rounded-full h-50 w-50 ${finalcategory===i.menuname?"border-pink-600 scale-105":"border-transparent"}`} src={i.menuimage} alt={i.menuname}/>
                <h1 className="mt-10 text-center font-semibold text-lg">{i.menuname}</h1>
                </div>

            ))}
        </div>
    </div>

}
export default Menu;