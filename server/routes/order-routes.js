import express from "express";
import { getorder } from "../controllers/order-control.js";
const orderrouter=express.Router();
orderrouter.post("/det",getorder);
export default orderrouter;