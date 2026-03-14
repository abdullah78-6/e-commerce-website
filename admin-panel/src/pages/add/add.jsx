import {useDispatch,useSelector} from "react-redux"
import { control } from "../../redux/slice";
import { admin_assest } from "../../assets";
import {ToastContainer,toast} from "react-toastify"
import { useState } from "react";
import axios from "axios";
function Add({url}){
    const[image,setimage]=useState(false);
    const data=useSelector(state=>state.ainfo.data);
    const dispatch=useDispatch();
    const onchangehandler=(event)=>{
        dispatch(control.setdata({
            name:event.target.name,
            value:event.target.value
        }));
    }
    const onsubmithandler=async(event)=>{
        event.preventDefault();
       if(!image){
            toast.error("PLEASE UPLOAD IMAGE ");
            return ;
        }
        const formdata=new FormData();
        formdata.append("name",data.name);
        formdata.append("description",data.description);
        formdata.append("price",Number(data.price));
        formdata.append("category",data.category);
        formdata.append("image",image);
        const response =await  axios.post(`${url}/api/store/add`,formdata);
        if(response.data.status){
            setimage(false);
            dispatch(control.setdata({name:"name",value:""}));
            dispatch(control.setdata({name:"description",value:""}));
            dispatch(control.setdata({name:"price",value:""}));
            dispatch(control.setdata({name:"category",value:"MENS COLLECTION"}));
            
         toast.success(response.data.result);
        }
        else{
            toast.error(response.data.result);
        }
       
        
    }
    return <div className="font-semibold text-gray-800 capitalize    ">
        {/* <ToastContainer/> */}
        <form className="flex flex-col justify-center items-center  shadow-2xl bg-white py-1 mt-2 rounded-2xl  w-140 " onSubmit={onsubmithandler}>
            <p className="text-2xl">upload area</p>
            <div>
            <label htmlFor="image">
                <img className="w-30 " src={image?URL.createObjectURL(image):`${admin_assest.uploads}`} alt="" required/>
            </label>
            
            <input onChange={(e)=>(setimage(e.target.files[0]))}  type="file" id="image" className="hidden"  />
            </div>
            <div className="flex flex-col mt-3  gap-9 items-center justify-center">
                <label className="text-2xl " htmlFor="product name">product name</label>
                <input className="border-2 rounded-2xl p-2 w-72" name="name" type="text" onChange={onchangehandler} value={data.name} placeholder="TypeHere" required/>
            </div>
            <div className="flex flex-col gap-9 mt-3 items-center justify-center ">
                <label className="text-2xl" htmlFor="text">product description</label>
                <textarea className="border-2 rounded-2xl w-80 p-3" name="description" onChange={onchangehandler} value={data.description} rows={6} placeholder="write content here " required ></textarea>
            </div>
            <div className="mt-3 flex flex-col justify-center items-center gap-7">
                <p className="text-2xl w-50">product category and product price</p>
                <input className="border-2 rounded-2xl p-2 w-72" name="price" onChange={onchangehandler} value={data.price} type="number" placeholder="₨" required />
                <div className="mt-3">
                    <select className="border-2 w-72 rounded-2xl p-2" name="category" onChange={onchangehandler} value={data.category} required>
                        <option value="MENS COLLECTION">MENS COLLECTION</option>
                        <option value="WOMENS COLLECTION">WOMENS COLLECTION</option>
                        <option value="CHILDRENS COLLECTION">CHILDRENS COLLECTION</option>
                        <option value="NEWBORNS COLLECTION">NEWBORNS COLLECTION</option>
                        <option value="WINTER COLLECTION">WINTER COLLECTION</option>
                        <option value="SUMMER OUTFITS">SUMMER OUTFITS</option>
                        
                    </select>
                </div>

            </div>
            <div>
                <button className="bg-yellow-500 p-3 text-2xl capitalize px-25 mt-3 rounded-3xl hover:text-white hover:bg-yellow-900" type="submit">add</button>
            </div>
        </form>
    </div>

}
export default Add;