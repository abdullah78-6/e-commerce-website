import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
import {ToastContainer,toast} from "react-toastify"
function Orders(){
    const lists=useSelector(state=>state.ainfo.list);
    // order from client side=>server to admin panel 
    
return (
    <div className="font-semibold capitalize flex flex-col items-center">

      {/* <ToastContainer /> */}

      <h1 className="text-2xl mb-4">MY ORDERS </h1>

      
      <div className="border-2 w-270 ml-3">

      
        <div className="flex text-center py-3 ">
          <div className="w-1/5">image</div>
          <div className="w-1/5">name</div>
          <div className="w-1/5">quantity</div>
          <div className="w-1/5">category</div>
          <div className="w-1/5">order status</div>
          <div className="w-1/5">pincode</div>
          <div className="w-1/5">address</div>
          <div className="w-1/5">phone</div>
        </div>

      
        {lists.map((i, index) => (
          <div
            key={index}
            className="flex text-center items-center py-3 border-t-2 text-2xl text-gray-800 "
          >
            <div className="w-1/5 flex justify-center">
              <img
                src={i.image}
                alt=""
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="w-1/5">{i.name}</div>
            <div className="w-1/5">{5}</div>
            <div className="w-1/5">{i.category}</div>


            <div className="w-1/5">
              <select>
                <option value="processing">processing</option>
                <option value="on the way ">on the way </option>
                <option value="delivered">delivered</option>
              </select>
            </div>
            <div className="w-1/5">226020</div>
            <div className="w-1/5">daliganj lucknow</div>
            <div className="w-1/5">995633735</div>
          </div>
        ))}

      </div>

    </div>
  );
}
export default Orders;