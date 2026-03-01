import {createSlice} from "@reduxjs/toolkit"
const adminslice=createSlice({
    name:"admin",
    initialState:{class:""},
    reducers:{
        setclass(state,action){
            state.class=action.payload
            
        }

    }
})
export const control=adminslice.actions;
export default adminslice.reducer