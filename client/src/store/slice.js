import {createSlice} from "@reduxjs/toolkit"
const eslice=createSlice({
    name:"shop",
    initialState:{navclass:"",login:false,statelog:"signin",input:"text",category:"ALL",logindata:{
        name:"",
        email:"",
        password:""
    },
    profileicon:false,
    backendemail:"",
    token:""
},
    reducers:{
        setnavclass(state,action){
            state.navclass=action.payload;


        },
        setlogin(state,action){
            state.login=action.payload;

        },
        setstatelog(state,action){
            state.statelog=action.payload;
        },
        setinput(state,action){
            state.input=action.payload;
        },
        setcategory(state,action){
            state.category=action.payload;
        },
        setloginds(state,action){
            const {name,value}=action.payload;
            state.logindata[name]=value;


        },
        setprofileicon(state,action){
            state.profileicon=action.payload;
        },
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        settoken(state,action){
            state.token=action.payload;
        }

    }
})
export const control=eslice.actions;
export default eslice.reducer;