import { number } from "joi";
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    price:{
        type: Number,
        require: true,
    }
})
export default mongoose.model("sp",productSchema)