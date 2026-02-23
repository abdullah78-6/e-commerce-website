import {useSelector} from "react-redux"
import { control } from "../../store/slice.js";
import { productlist } from "../../assests/index.js";
function Display(){
const finalcategory=useSelector(state=>state.main.category);
    return <div className="">
        <div className="flex justify-center-safe items-center flex-wrap gap-7 mt-10 transition ease-in-out duration-200 ">
            {productlist.map((item,index)=>{
                if(finalcategory==="ALL"||finalcategory===item.category){
                    return <div className="transition ease-in-out duration-200 flex flex-col flex-wrap  p-3 rounded-3xl font-semibold text-3xl text-gray-700 hover:scale-110 bg-pink-100 w-72 shadow-lg overflow-hidden">
                        <img className="w-full h-52 object-cover" src={item.image} alt={item.name}/>    
                        <h1 className="text-2xl text-center">{item.name}</h1>
                        <h1 className="text-lg text-pink-700 mt-4 text-center">₹{item.price}</h1>
                        <button className="text-lg capitalize bg-pink-500 p-2 rounded-2xl text-white hover:text-gray-600 hover:bg-pink-600 mt-2">details</button>
                    

                    </div>
                }

            })}
        </div>
    </div>

}
export default Display;