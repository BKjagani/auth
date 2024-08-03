import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        default : null
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String
    }
}, {timestamps : true})

const Product = mongoose.model("Product", productSchema);
export default Product;

