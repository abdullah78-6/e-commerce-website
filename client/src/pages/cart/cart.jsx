import {useDispatch,useSelector} from "react-redux"
import { productlist } from "../../assests";
import { RxCross1 } from "react-icons/rx";
import { manage } from "../../store/products-slice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";
function ShoopingCart(){
    const cartdetails=useSelector(state=>state.main2.cartdetails);
    const productid=useSelector(state=>state.main2.productid);
    const finalcategory=useSelector(state=>state.main.category);
    const totalprice=useSelector(state=>state.main2.totalprice);
    const backenddata=useSelector(state=>state.main2.backenddata);
    const token=useSelector(state=>state.main.token);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const url="https://e-commerce-website-main-server.onrender.com"
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
  const loadcartdata=async(tok)=>{
      const response=await axios.post(url+"/api/cart/get",{},{headers:{token:tok}});
      dispatch(manage.setcartitems(response.data.cartdata||{}));
    }
   
    useEffect(()=>{
      async function Loaddata(){
        await  fetchproductdata();
        if(localStorage.getItem("token")){
          const tok=localStorage.getItem("token");
          if(tok){
          await loadcartdata(tok);
          }
        }

      }
      Loaddata();
      
    },[]);
    useEffect(()=>{
        dispatch(manage.settotalprice());
       

    },[cartdetails,backenddata]);

    const Addtocart=async(itemid)=>{
      dispatch(manage.setaddtocart(itemid));
      if(localStorage.getItem("token")){
        await axios.post(url+"/api/cart/inc",{itemid},{headers:{token}});

      }

    }
    const Removefromcart=async(itemid)=>{
      dispatch(manage.setremovefromcart(itemid))
      if(localStorage.getItem("token")){
        await axios.post(url+"/api/cart/dec",{itemid},{headers:{token}});
      }

    }
    
    return (
  <div className="font-semibold min-h-screen w-full  px-4 md:px-10 py-6">
    {/* <ToastContainer /> */}

    
    <div className="flex justify-center mt-[-9px] items-center overflow-x-auto">
      <ul className="flex justify-between mt-[-9px] items-center gap-16 p-4 text-center capitalize text-lg md:text-lg  rounded-2xl  min-w-[200px]">
        <li className="w-32">product image</li>
        <li className="w-32">increase quantity</li>
        <li className="w-32">product name</li>
        <li className="w-32">single product price</li>
        <li className="w-34">quantity</li>
        <li className="w-32">total price</li>
        <li className="w-34">remove product</li>
      </ul>
    </div>

    
    <div className="mt-14 space-y-4 max-h-[500px] overflow-y-auto pr-2 cursor-pointer">
      {Object.keys(cartdetails).length===0 ? (
        <h1 className="text-center mt-10 text-3xl text-red-700 font-semibold">
          CART IS EMPTY
        </h1>
      ) : (
        backenddata.length>0&&
        backenddata.map((item) => {
          if (cartdetails[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="flex justify-between items-center gap-16  p-4 text-center  rounded-xl shadow-sm hover:shadow-md transition min-w-[900px]"
              >
                {/* src={`${url}/images/`+item.image} */}
                <img
                  className="w-24 h-24 object-cover rounded-2xl"
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <FaPlus
                    className="text-green-700 text-3xl cursor-pointer hover:scale-110 transition"
                    // onClick={() =>
                    //   dispatch(manage.setaddtocart(item._id))
                     
                    // }
                    onClick={()=>Addtocart(item._id)}
                  />
                </div>

                <h1 className="w-32">{item.name}</h1>
                <h1 className="w-24">₹{item.price}</h1>

                <p className="w-16">{cartdetails[item._id]}</p>

                <p className="w-24 font-semibold">
                  ₹{item.price * cartdetails[item._id]}
                </p>

                <h1
                  // onClick={() =>
                  //   dispatch(manage.setremovefromcart(item._id))
                  // }
                  onClick={()=>Removefromcart(item._id)}
                  className="text-red-700 text-3xl cursor-pointer hover:scale-110 transition"
                >
                  <RxCross1 />
                </h1>
              </div>
            );
          }
        })
      )}
    </div>

    
 <div className="">
     <div className="text-xl font-semibold text-gray-800 mt-10"> 
        <h1>PRODUCT PRICE SECTION</h1> 
        <h1> TOTAL PRICE OF All PRODUCT : ₹ {totalprice}</h1> 
        <h1>DELIVERY FEE :₹ {totalprice==0?0:150}</h1> 
        <h1>FINAL TOTAL PRICE:₹ {totalprice==0?0:totalprice+150}</h1> 
        <button className="bg-rose-700 p-2 text-lg rounded-2xl text-gray-900 font-semibold hover:bg-rose-900 " onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT </button> 
        </div> 
        </div>   
  </div>
);
}
export default ShoopingCart;
