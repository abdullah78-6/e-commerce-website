import {configureStore} from "@reduxjs/toolkit"
import data from "./slice.js"
import data2 from "./products-slice.js";
const estore=configureStore({
    reducer:{
        main:data,
        main2:data2
    }
})
export default estore;