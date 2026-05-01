import express from "express";
import { getProfile, login, Logout, register } from "../controllers/usercontroller.js";
const authrouter=express.Router();
authrouter.post("/signup",register);
authrouter.post("/signin",login);
authrouter.post("/out",Logout);
authrouter.get("/pr",getProfile);
export default authrouter;