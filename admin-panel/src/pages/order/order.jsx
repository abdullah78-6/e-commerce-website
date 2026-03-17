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
    const token=useSelector(state=>state.ainfo.token);
   
    const dispatch=useDispatch();
    const url="http://localhost:8000"
    const getorderadmin=async()=>{
      if(!token){
        toast.error("ADMIN LOGIN REQUIRED");
        return ;
      }
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

      <h1 className="text-4xl mb-4 text-pink-800 mt-3">MY ORDERS </h1>

      
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
      <div className=" flex justify-center items-center ml-22 max-w-6xl flex-wrap gap-9  text-xl capitalize text-gray-900">
        {token&&orderfrombackend.map((order,index)=>{
          return <div className="flex justify-center  flex-row border-2 ml-9 rounded-3xl p-2 bg-white" key={index}>
            <h1 className="text-pink-900 text-3xl "><IoBag/></h1>
            <h1 className="text-red-900">ORDER#{index+1}</h1>
            <div className="flex justify-center items-center flex-wrap gap-0 text-xl">
              <p>{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+" QUANTITY: "+item.quantity
                }
                else{
                  return item.name+" QUANTITY: "+item.quantity+","
                }

              })}</p>
              <p>NAME:{order.address.name}</p>
              <div>
                <p>ADDRESS:{order.address.address+" , "}</p>
                <p className="lowercase text-xl">CITY AND PINCODE: {order.address.city+" , "+order.address.email+","+order.address.landmark+","+order.address.pincode}</p>
              </div>
              <p className="mb-3  px-5">📞: {order.address.phonenumber}</p>
              <div className="mb-3">
               <select className=" border-2  capitalize  border-gray-400 rounded-lg  py-2 focus:outline-none focus:ring-pink-500 px-19"   onChange={(e)=>updatestatus(e,order._id)} >
                <option value="processing">processing</option>
                <option value="on the way ">on the way </option>
                <option value="delivered">delivered</option>
              </select>
              </div>
              
            </div>
            
          </div>
        })}

      </div>

    </div>
  );
}
export default Orders;