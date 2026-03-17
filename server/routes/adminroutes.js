import express from "express"
import { adminlogin, adminregister } from "../controllers/admin-controller.js";
const adminrouter=express.Router();
adminrouter.post("/reg",adminregister);
adminrouter.post("/sig",adminlogin)
export default adminrouter;