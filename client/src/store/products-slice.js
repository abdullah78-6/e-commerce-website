import {createSlice} from "@reduxjs/toolkit"
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const productslice=createSlice({
    name:"products",
    initialState:{productname:"",productimage:"",productprice:"",productid:null,cartdetails:{}},
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

        }
        

    }
})
export const manage=productslice.actions;
export default productslice.reducer;