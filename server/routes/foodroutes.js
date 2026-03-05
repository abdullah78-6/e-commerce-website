import express from "express"
import { additem, deleteitem, getitem } from "../controllers/foodcontrol.js";
import multer from "multer";
const fashionrouter=express.Router();
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload=multer({storage:storage});
fashionrouter.post("/add",upload.single("image"),additem);
fashionrouter.get("/get",getitem);
fashionrouter.delete("/remove",deleteitem);
export default fashionrouter;