import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    type: String,
    stock: Number,
    mrp: Number,
    sellingPrice: Number,
    brandName: String,
    imageUrl: String,
    exchangeReturn: String,
}, {timestamps: true})

const Product = mongoose.model("Product", productSchema)

export default Product