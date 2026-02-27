import {createSlice} from "@reduxjs/toolkit"
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { productlist } from "../assests";
const productslice=createSlice({
    name:"products",
    initialState:{productname:"",productimage:"",productprice:"",productid:null,cartdetails:{},totalprice:0,totalquantity:0,productdescription:""},
    reducers:{
        setpname(state,action){
            state.productname=action.payload;

        },
        setpimage(state,action){
            state.productimage=action.payload;

        },
        setpprice(state,action){
            state.productprice=action.payload

        },
        setproductid(state,action){
            state.productid=action.payload;
        },
        setaddtocart(state,action){
            const id=action.payload;
            if(!state.cartdetails[id]){
                state.cartdetails[id]=1;
                toast.success("ITEM ADDED TO THE CART ");
            }
            else{
                state.cartdetails[id]+=1;
                
            }


        },
        setremovefromcart(state,action){
            const id=action.payload;
            if(state.cartdetails[id]>1){
                state.cartdetails[id]-=1;
                
            }
            else{
                delete state.cartdetails[id];
                toast.error("ITEM REMOVED FROM THE CART ");
            }

        },
         settotalprice(state){
            let total=0;
            for(const item in state.cartdetails){
                if(state.cartdetails[item]>0){
                    let iteminfo=productlist.find((product)=>product._id==item);
                   total=total+iteminfo.price*state.cartdetails[item]; 
                }
            }
            state.totalprice=total;
            
           
            
        },
        settotalquantity(state){
            let total1=0;
            for(const item in state.cartdetails){
                if(state.cartdetails[item]>0){
                    total1=total1+state.cartdetails[item];
                }
            }
            state.totalquantity=total1;
        },
        setproductdescription(state,action){
            state.productdescription=action.payload;
        }

        

    }
})
export const manage=productslice.actions;
export default productslice.reducer;