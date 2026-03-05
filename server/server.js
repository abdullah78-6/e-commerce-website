import express from "express";
import cors from "cors";
import "dotenv/config";
import { databaseconnection } from "./config/db.js";
import fashionrouter from "./routes/foodroutes.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api/store",fashionrouter);
app.use("/images",express.static("uploads"))
databaseconnection();
app.get("/",(req,res)=>{
    res.send("API IS READY FOR WORKING ")
})
const ports=process.env.port
app.listen(ports,()=>{
    console.log(`SERVER IS LISTINING AT PORT http://localhost:${ports} `)
})