import express from "express";
import bodyParser from "body-parser";
import AdminRouter from './routes/admin.route.js';
import CategoryRouter from './routes/category.route.js';
import ProductRouter from './routes/product.route.js';
import UserRouter from './routes/user.route.js';
import CartRouter from './routes/cart.route.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.use("/admin",AdminRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.use("/user",UserRouter);
app.use("/cart",CartRouter);
app.listen(3000,()=>{
    console.log("Server Started...");
});