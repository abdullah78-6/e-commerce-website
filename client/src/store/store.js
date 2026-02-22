import {configureStore} from "@reduxjs/toolkit"
import data from "./slice.js"
const estore=configureStore({
    reducer:{
        main:data
    }
})
export default estore;