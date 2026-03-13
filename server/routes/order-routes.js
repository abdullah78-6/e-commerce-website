import express from "express";
import { getadminorder, getclientorders, getorder, updatestatus } from "../controllers/order-control.js";
import authmiddleware from "../middlewares/auth.js";
const orderrouter=express.Router();
orderrouter.post("/det",authmiddleware,getorder);
orderrouter.post("/uorder",authmiddleware,getclientorders);
orderrouter.get("/aorder",getadminorder);
orderrouter.post("/update",updatestatus);
export default orderrouter;