import {createSlice} from "@reduxjs/toolkit"
const eslice=createSlice({
    name:"shop",
    initialState:{navclass:"",login:false,statelog:"signin",input:"text",category:"ALL"},
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
        }

    }
})
export const control=eslice.actions;
export default eslice.reducer;