import {useDispatch,useSelector} from "react-redux"
import { productlist } from "../../assests";
import { RxCross1 } from "react-icons/rx";
import { manage } from "../../store/products-slice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ShoopingCart(){
    const cartdetails=useSelector(state=>state.main2.cartdetails);
    const productid=useSelector(state=>state.main2.productid);
    const dispatch=useDispatch();
    return <div>
        {productlist.map((item,index)=>(
            <div>
                <h1>{cartdetails[item._id]}</h1>
            </div>

        ))}
        <ToastContainer/>
        {Object.values(cartdetails).every((qty)=>qty===0)?(
            <h1>CART IS EMPTY </h1>
        ):(
        productlist.map((item)=>{
            if(cartdetails[item._id]>0){
                return (
                    <div>
                        <img src={item.image} alt={item.image}/>
                        <h1>{item.name}</h1>
                        <h1>₹{item.price}</h1>
                        {/* quantity */}
                        <p>{cartdetails[item._id]}</p>
                        {/* total price of product  */}
                        <p> ₹{item.price*cartdetails[item._id]}</p>
                        <h1 onClick={()=>dispatch(manage.setremovefromcart(item._id))}><RxCross1/></h1>
                 </div>
                )
            }

        })

        )}


    </div>

}
export default ShoopingCart;