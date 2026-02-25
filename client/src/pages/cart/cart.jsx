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
function ShoopingCart(){
    const cartdetails=useSelector(state=>state.main2.cartdetails);
    const productid=useSelector(state=>state.main2.productid);
    const finalcategory=useSelector(state=>state.main.category);
    const dispatch=useDispatch();
    const navigate=useNavigate();
     useEffect(()=>{
        if(!productid){
            navigate("/");

        }
        

    },[productid,navigate]);
    return <div>
        <ToastContainer/>
        
        {Object.values(cartdetails).every((qty)=>qty===0)?(
            <h1>CART IS EMPTY </h1>
        ):(
        productlist.map((item)=>{
            if(cartdetails[item._id]>0){
                return (
                    
                    <div className="flex justify-center items-center gap-20 p-4">
                        <img src={item.image} alt={item.image}/>
                        
                           <div>
            <h1>INCREASE QUANTITY</h1>
            <h1><FaPlus onClick={()=>dispatch(manage.setaddtocart(item._id))}/></h1>
          </div>
                        
                    
                     
                        <h1>PRODUCT NAME ={item.name}</h1>
                        <h1> SINGLE PRODUCT PRICE =₹{item.price}</h1>
                        {/* quantity */}
                        <p> QUANTITY {cartdetails[item._id]}</p>
                        {/* total price of product  */}
                        <p> TOTAL PRICE ₹{item.price*cartdetails[item._id]}</p>
                        <h1  onClick={()=>dispatch(manage.setremovefromcart(item._id))}>REMOVE PRODUCT <RxCross1/></h1>
                 </div>
                )
            }

        })

        )}
            {/* <div>
                <div>
                <h1>PRODUCT PRICE SECTION</h1>
                </div>
            </div> */}

    </div>

}
export default ShoopingCart;