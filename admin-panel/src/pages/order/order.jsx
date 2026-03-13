import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
import {ToastContainer,toast} from "react-toastify"
import { useEffect } from "react";
import axios from "axios"
import { IoBag } from "react-icons/io5";
function Orders(){
    const lists=useSelector(state=>state.ainfo.list);
    // order from client side=>server to admin panel 
    const orderfrombackend=useSelector(state=>state.ainfo.orders);
   
    const dispatch=useDispatch();
    const url="http://localhost:8000"
    const getorderadmin=async()=>{
      const newurl=url;
      try {
        const response=await axios.get(`${newurl}/api/order/aorder`);
        if(response.data.status){
          dispatch(control.setorders(response.data.result)); 
          console.log(response.data.result);
        }
        else{
          toast.error("SERVER ERROR");
        }
   }catch (error) {
    console.log(error);
  }
}
    useEffect(()=>{
      getorderadmin();
      

    },[]);
   const updatestatus=async(event,orderid)=>{
    const response=await axios.post(url+"/api/order/update",{orderid,status:event.target.value})
    if(response.data.status){
      toast.success(response.data.result);
      await getorderadmin();
    }
    else{
      toast.error(response.data.message);
    }
      

    }
    
    
  return (
    <div className="font-semibold capitalize flex flex-col items-center">

      {/* <ToastContainer /> */}

      <h1 className="text-2xl mb-4">MY ORDERS </h1>

      
      {/* <div className="border-2 w-270 ml-3">

      
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

      </div> */}
      <div className="flex justify-center items-center gap-5 w-180">
        {orderfrombackend.map((order,index)=>{
          return <div key={index}>
            <h1><IoBag/></h1>
            <div>
              <p>{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+"QUANTITY"+item.quantity
                }
                else{
                  return item.name+"QUANTITY"+item.quantity+","
                }

              })}</p>
              <p>{order.address.name}</p>
              <div>
                <p>{order.address.address+","}</p>
                <p>{order.address.city+","+order.address.email+","+order.address.landmark+","+order.address.pincode}</p>
              </div>
              <p>{order.address.phonenumber}</p>
               <select  onChange={(e)=>updatestatus(e,order._id)} >
                <option value="processing">processing</option>
                <option value="on the way ">on the way </option>
                <option value="delivered">delivered</option>
              </select>
              
            </div>
            
          </div>
        })}

      </div>

    </div>
  );
}
export default Orders;