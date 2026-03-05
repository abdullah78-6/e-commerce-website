import mongoose from "mongoose";
const fashionschema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})
const fashionmodel=mongoose.models.fashion||mongoose.model("fashionproducts",fashionschema);
export default fashionmodel