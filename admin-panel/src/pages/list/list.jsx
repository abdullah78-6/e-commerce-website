import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
import {ToastContainer,toast} from "react-toastify"
import { useEffect } from "react";
import axios from "axios"
function List({url}){
  const dispatch=useDispatch();
    const lists=useSelector(state=>state.ainfo.list);
    const backenddata=useSelector(state=>state.ainfo.backenddata);
    const token=useSelector(state=>state.ainfo.token);
  const fetchproductdata=async()=>{
    if(!token){
      toast.error("ADMIN LOGIN REQUIRED");
      return ;
    }
      const newurl=url;
      const response=await axios.get(`${newurl}/api/store/get`); 
      if(response.data.status){
        dispatch(control.setbackenddata(response.data.ans));
        console.log(response.data.ans);
        

      }
      else{
        console.log("error");

      }

    }
    useEffect(()=>{
      fetchproductdata();

    },[])
    const deleteproductlist=async(ids)=>{
      const newurl=url;
      const response=await axios.delete(`${newurl}/api/store/remove`,{
        data:{id:ids}
      });
      await fetchproductdata();
      if(response.data.success){
        toast.error(response.data.result);
      }
      else{
        toast.error(response.data.result);
      }




    }
    
return (
    <div className="font-semibold capitalize flex flex-col items-center">

      {/* <ToastContainer /> */}

      <h1 className="text-2xl mb-4">all product list</h1>

      
      <div className="border-2 w-150 ml-3">

      
        <div className="flex text-center py-3 ">
          <div className="w-1/5">image</div>
          <div className="w-1/5">name</div>
          <div className="w-1/5">category</div>
          <div className="w-1/5">price</div>
          <div className="w-1/5">actions</div>
        </div>

      
        {token&&backenddata.map((i, index) => (
          <div
            key={index}
            className="flex text-center items-center py-3 border-t-2 text-2xl text-gray-800 "
          >
            
            <div className="w-1/5 flex justify-center">
              <img
                src={`${url}/images/`+i.image}
                alt=""
                className="w-16 h-16 object-contain"
              />
            </div>

            <div className="w-1/5">{i.name}</div>
            <div className="w-1/5">{i.category}</div>
            <div className="w-1/5">₹{i.price}</div>

            <div className="w-1/5">
              <button onClick={()=>deleteproductlist(i._id)} className="text-xl text-red-800">X</button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
export default List;