import express from "express"
import { adminlogin, adminregister, getProfile, Logout } from "../controllers/admin-controller.js";
const adminrouter=express.Router();
adminrouter.post("/reg",adminregister);
adminrouter.post("/sig",adminlogin)
adminrouter.post("/out",Logout);
adminrouter.get("/pr",getProfile);
export default adminrouter;