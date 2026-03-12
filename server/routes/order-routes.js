import express from "express";
import { getorder, verifyorder } from "../controllers/order-control.js";
import authmiddleware from "../middlewares/auth.js";
const orderrouter=express.Router();
orderrouter.post("/det",authmiddleware,getorder);
orderrouter.post("/verify",verifyorder);
export default orderrouter;