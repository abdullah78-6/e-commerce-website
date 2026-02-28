import {useDispatch,useSelector} from "react-redux"
import { manage } from "../../store/products-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
function Details(){
    const productname=useSelector(state=>state.main2.productname);
    const productimage=useSelector(state=>state.main2.productimage);
    const productprice=useSelector(state=>state.main2.productprice);
    const productid=useSelector(state=>state.main2.productid);
    const productdescription=useSelector(state=>state.main2.productdescription);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!productid){
            navigate("/");
          

        }
        

    },[productid,navigate]);
    return (
  <div className="flex justify-center items-center gap-16 flex-wrap font-semibold capitalize min-h-screen  px-6 py-10">
    <ToastContainer />


    <div className=" p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition">
      
      <img
        className="w-72 p-3 rounded-3xl shadow-md object-cover"
        src={productimage}
        alt={productimage}
        loading="lazy"
      />

      <h1 className="text-pink-700 text-xl mt-4">
        product id: {productid}
      </h1>

      <h1 className="text-pink-700 text-2xl font-bold mt-2">
        ₹{productprice}
      </h1>

      <button
        onClick={() => dispatch(manage.setaddtocart(productid))}
        className="text-white bg-pink-700 px-6 py-2 rounded-2xl text-lg capitalize hover:bg-pink-900 transition mt-4 shadow-md hover:shadow-lg"
      >
        add to cart
      </button>
    </div>


    <div className="w-90 space-y-4">
      <h1 className="text-4xl text-pink-700 font-bold">
        {productname}
      </h1>

      <p className="text-xl text-gray-800 leading-relaxed">
        {productdescription}
      </p>

      <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-2xl shadow-md">
        Qidwai Collections is your ultimate fashion destination for the entire family...
      </p>
    </div>
  </div>
);
}
export default Details;