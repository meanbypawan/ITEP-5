import express from "express";
import bodyParser from "body-parser";
import AdminRouter from './routes/admin.route.js';
import CategoryRouter from './routes/category.route.js';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/admin",AdminRouter);
app.use("/category",CategoryRouter);

app.listen(3000,()=>{
    console.log("Server Started...");
});