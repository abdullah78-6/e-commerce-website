import express from "express";
import cors from "cors";
import "dotenv/config";
import { databaseconnection } from "./config/db.js";
import fashionrouter from "./routes/foodroutes.js";
import authrouter from "./routes/userroutes.js";
import cartrouter from "./routes/cartroutes.js";
import orderrouter from "./routes/order-routes.js";
import adminrouter from "./routes/adminroutes.js";
import cookieParser from "cookie-parser";
const app=express();
app.use(express.json());
app.use(cookieParser());
// use localhost for local server 
app.use(cors({
    origin:[
        "https://e-commerce-website-frontend-yeyn.onrender.com",
        "https://e-commerce-website-admin-owner.onrender.com"
    ],
    credentials:true
}));
app.use("/api/store",fashionrouter);
app.use("/api/auth",authrouter);
app.use("/api/cart",cartrouter);
app.use("/api/order",orderrouter);
app.use("/api/admin",adminrouter);
app.use("/images",express.static("uploads"))
databaseconnection();
app.get("/",(req,res)=>{
    res.send("API IS READY FOR WORKING ")
})
const ports=process.env.PORT;
app.listen(ports,()=>{
    console.log(`SERVER IS LISTINING AT PORT http://localhost:${ports} `)
})