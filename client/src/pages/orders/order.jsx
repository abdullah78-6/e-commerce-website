import { IoBag } from "react-icons/io5";
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react";
import { manage } from "../../store/products-slice";
import { useState } from "react";
function Order() {
  const dispatch=useDispatch();
  const ordersfrombackend=useSelector(state=>state.main2.orders);
const token=useSelector(state=>state.main.token);
const[selectedorder,setselectedorder]=useState(null);
  const url="http://localhost:8000"
  const getorders=async()=>{
    if(!token){
      return ;
    }
    const newurl=url;
    try {
      const response=await axios.post(`${newurl}/api/order/uorder`,{},{headers:{token}});
      if(response.data.status){

      dispatch(manage.setorders(response.data.result));
      
    }
      else{
        toast.error("SERVER ISSUE");
      }
  } catch (error) {
    console.log("client side orders error",error);
  }
    }
  useEffect(()=>{
  if(token){
      getorders();
      }
},[token]);
const getorderafterupdatestatus=(orderid)=>{
    //  const response=await axios.post(url+"/api/order/update",{orderid})
    //   if(response.data.status){
    // // dispatch(manage.setorders(response.data.ans));
    // await getorders();
         
    //   }
    //   else{
    //     toast.error(response.data.message);
    //   }
    if(!orderid){
      return;
    }
    setselectedorder(orderid.toString());
        
}
      


return (
    <div className="h-screen font-semibold capitalize flex flex-col items-center mt-10 px-4">

      <h1 className="text-3xl mb-6 text-pink-800">My Orders</h1>

    
      {/* <div className="w-full max-w-7xl overflow-x-auto border rounded-lg">

    
        <div className="flex text-center py-3 min-w-[1100px] bg-gray-100 font-bold">
          <div className="w-32">Image</div>
          <div className="w-32">Name</div>
          <div className="w-24">Qty</div>
          <div className="w-40">Category</div>
          <div className="w-40">Address</div>
          <div className="w-28">Pincode</div>
          <div className="w-36">Phone</div>
          <div className="w-32">Status</div>
          <div className="w-32">City</div>
          <div className="w-40">Landmark</div>
          <div className="w-24">track order</div>
        </div>

    
        {orders.map((i, index) => (
          <div
            key={index}
            className="flex items-center text-center border-t py-3 text-sm md:text-base min-w-[1100px]"
          >
            <div className="w-32 flex justify-center text-xl">
              <IoBag />
            </div>

            <div className="w-32">{i.name}</div>
            <div className="w-24">5</div>
            <div className="w-40">{i.category}</div>
            <div className="w-40">{i.address}</div>
            <div className="w-28">{i.pincode}</div>
            <div className="w-36">{i.phone}</div>
            <div className="w-32 text-yellow-600">{i.status}</div>
            <div className="w-32">{i.city}</div>
            <div className="w-40">{i.landmark}</div>
            <button className="bg-black w-24 text-sm  text-gray-200 px-3 rounded-2xl hover:scale-110 transition ease-in-out duration-300">TRACK ORDER </button>
          </div>
        ))}
      </div> */}
      
      <div className="flex justify-center items-center gap-3  flex-wrap overflow-y-scroll">
      {/* <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
      {ordersfrombackend&&ordersfrombackend.map((order,index)=>{
        return (
          // <div className="flex shadow-2xl w-90 md:w-150 xl:w-150 lg:w-150 px-2 py-2 bg-white flex-col justify-center items-center flex-wrap gap-2 border-2 p-4 rounded-lg text-xl hover:scale-105 transition ease-in duration-150 overflow-x-scroll md:overflow-x-hidden lg:overflow-x-hidden xl:overflow-x-hidden    md:overflow-y-hidden lg:overflow-y-hidden xl:overflow-y-hidden  " key={order._id}>
          <div
            key={order._id}
            className="  bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col md:flex-row lg:md:flex-row xl:md:flex-row  gap-2 justify-between "
          >
            <h1 className="text-pink-900 text-4xl"><IoBag /></h1>
            <p className="text-center text-red-900 capitalize ">{order.items.map((item,index)=>{
              if(index===order.items.length-1){
                return item.name+ "QUANTITY:" + item.quantity
              }
              else{
                return item.name+ "QUANTITY:" + item.quantity+","
              }
            })}</p>
            <p className="text-red-900">MRP:₹{order.amount}.00</p>
            <p>Items:{order.items.length}</p>
            {/* {selectedorder===order._id.toString()&&( */}
              <p><span>&#x25cf;</span><b className="text-red-700">STATUS:{order.status}</b></p>
                   {/* )} */}
             {/*  */}
            
            <button onClick={getorders} className="bg-black w-24 text-sm  text-gray-200 px-3 rounded-2xl hover:scale-110 transition ease-in-out duration-100">TRACK ORDER </button>

          </div>
        )

      })}
      </div>
      </div>
    
  );
}

export default Order;