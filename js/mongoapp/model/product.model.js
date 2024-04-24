import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
   id: Number,
   title: String,
   description: String,
   discountPercentage: Number,
   price: Number,
   rating: Number,
   stock: Number,
   brand: String,
   category: String,
   thumbnail: String,
   images: []
});

export const Product = mongoose.model("product",productSchema);