import {createSlice} from "@reduxjs/toolkit"
import { admin_assest } from "../assets";
const adminslice=createSlice({
    name:"admin",
    initialState:{class:"",data:{
        name:"",
        description:"",
        price:"",
        category:"MENS COLLECTION"

    },
    login:false,
    logs:{
        email:"",
        password:"",
    },
    token:"",
   backenddata:[],
    orders:[],
    list:[
        {
            
            image:admin_assest.uploads,
            name:"abdullah",
            category:"human",
            price:123

        },
        {
            image:admin_assest.uploads,
            name:"ronaldo",
            category:"good man ",
            price:123909

        },
        {
            
            image:admin_assest.uploads,
            name:"abdullah",
            category:"human",
            price:123

        },
        {
            
            image:admin_assest.uploads,
            name:"abdullah",
            category:"human",
            price:123

        },
    ]
       },
    reducers:{
        setclass(state,action){
            state.class=action.payload
            
        },
        
        setdata(state,action){
           const {name,value}=action.payload
           state.data[name]=value;

        },
        setlogs(state,action){
            const {name,value}=action.payload;
            state.logs[name]=value;

        },
        setbackenddata(state,action){
            state.backenddata=action.payload;
            
        },
        setorders(state,action){
            state.orders=action.payload;
        },
        setlogin(state,action){
            state.login=action.payload;
        },
        settoken(state,action){
            state.token=action.payload;
        }
       
        

    }
})
export const control=adminslice.actions;
export default adminslice.reducer