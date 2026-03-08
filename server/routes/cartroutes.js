import express from "express"
import { decreaseitem, getitem, increaseitem } from "../controllers/cartcontrol.js";
import authmiddleware from "../middlewares/auth.js";
const cartrouter=express.Router();
cartrouter.post("/inc",authmiddleware,increaseitem);
cartrouter.post("/dec",authmiddleware,decreaseitem);
cartrouter.post("get",authmiddleware,getitem);
export default cartrouter;