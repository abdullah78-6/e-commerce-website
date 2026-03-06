import express from "express";
import { login, register } from "../controllers/usercontroller.js";
const authrouter=express.Router();
authrouter.post("/signup",register);
authrouter.post("/signin",login);
export default authrouter;