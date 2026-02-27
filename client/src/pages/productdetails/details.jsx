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
    return <div className="flex justify-center items-center gap-12">
        <ToastContainer/>
        <div>
            <h1>id:{productid}</h1>
            <img src={productimage} alt={productimage}/>

        <h1>₹{productprice}</h1>
        <button onClick={()=>dispatch(manage.setaddtocart(productid))}  className="text-gray-800 bg-pink-700 p-2 rounded-2xl text-xl capitalize hover:bg-pink-900 hover:text-white">add to cart </button>
        </div>
        <div>
            <h1>{productname}</h1>
            <p>{productdescription}</p>
           <p>Qidwai Collections is your ultimate fashion destination for the entire family. We offer a wide variety of stylish and comfortable clothing for kids, men, women, and babies, covering all types of outfits for both winter and summer seasons. From everyday essentials to trendy seasonal wear, our collections are designed to combine quality, comfort, and affordability. We proudly feature our own branded shirts and t-shirts, elegant women’s sandals, and premium formal coats crafted to elevate your style. At Qidwai Collections, we are committed to bringing you fashion that suits every age, every season, and every occasion.</p>
        </div>
        
        
    </div>

}
export default Details;