import {useDispatch,useSelector} from "react-redux"
import { control } from "../../store/slice.js";
import { productlist } from "../../assests/index.js";
import {Link, useNavigate} from "react-router-dom"
import { manage } from "../../store/products-slice.js";
import { useEffect } from "react";
import axios from "axios";
function Display(){
const finalcategory=useSelector(state=>state.main.category);
  const backenddata=useSelector(state=>state.main2.backenddata);
const navigate=useNavigate();
const dispatch=useDispatch();
const url="http://localhost:8000";
 const fetchproductdata=async()=>{
      const newurl=url;
      const response=await axios.get(`${newurl}/api/store/get`); 
    
      if(response.data.status){
        dispatch(manage.setbackenddata(response.data.ans));
        console.log(response.data.ans);
        

      }
      else{
        console.log("error");

      }

    }
    useEffect(()=>{
        fetchproductdata();

    },[])
    return <div className="">
        <div className="flex justify-center-safe items-center flex-wrap gap-7 mt-10 transition ease-in-out duration-200 " id="p">
           
            {backenddata.map((item,index)=>{
                if(finalcategory==="ALL"||finalcategory===item.category){
                    return <div onClick={()=>dispatch(manage.setpimage(item.image))} className="transition ease-in-out duration-200 flex flex-col flex-wrap  p-3 rounded-3xl font-semibold text-3xl text-gray-700 hover:scale-110 bg-pink-100 w-72 shadow-lg overflow-hidden" key={index}>
                        <div onClick={()=>dispatch(manage.setproductid(item._id))}>
                        <img className="w-full h-52 object-cover" src={`${url}/images/`+item.image} alt={item.name}/>    
                        
                        <h1 className="text-2xl text-center">{item.name}</h1>
                        <h1 className="text-lg text-pink-700 mt-4 text-center">₹{item.price}</h1>
                        <div className="flex justify-center items-center " onClick={()=>dispatch(manage.setpprice(item.price))}>
                        <Link to="/display" onClick={()=>dispatch(manage.setpname(item.name),dispatch(manage.setproductdescription(item.description)))}   className="text-lg w-50 text-center capitalize bg-pink-500 p-2 rounded-2xl text-white hover:text-gray-600 hover:bg-pink-600 mt-2">details</Link>
                        </div>
                        </div>
                    

                    </div>
                }

            })}
        </div>
    </div>

}
export default Display;