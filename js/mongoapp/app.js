import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
const app = express();

mongoose.connect("mongodb://localhost:27017/myshop")
    .then(() => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use("/user",UserRouter);
        app.use("/product",ProductRouter);
        app.use("/cart",CartRouter);
        app.listen(3000, () => {
            console.log("Server Started...");
        });
    }).catch(err => {
        console.log(err);
    })