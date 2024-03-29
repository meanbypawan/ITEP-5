import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.route.js";
import CategoryRouter from './routes/category.route.js';
import ProductRouter from './routes/product.route.js';
import './model/association.js';
import CartRouter from './routes/cart.route.js';
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/cart",CartRouter);

app.listen(3000,()=>{
    console.log("Server Started...");
});