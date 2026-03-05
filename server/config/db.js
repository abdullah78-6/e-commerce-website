import mongoose from "mongoose"
export const databaseconnection=async()=>{
    try {
        await mongoose.connect("mongodb+srv://greatstack:123456abdullah@cluster0.siw3vfv.mongodb.net/fashion-shop");
        console.log("DATA BASE IS SUCESSFULLY CONNECTED ")
        
    } catch (error) {
        console.log("db connection error ",error.message);
        
    }
}