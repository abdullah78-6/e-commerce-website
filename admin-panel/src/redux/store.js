import {configureStore} from "@reduxjs/toolkit"
import data from "./slice.js"
const adminstore=configureStore({
    reducer:{
        ainfo:data
    }
})
export default adminstore;