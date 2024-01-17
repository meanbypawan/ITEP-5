import express from "express";
import { productList, saveProduct } from "../controller/product.controller.js";
import multer from "multer";

const upload = multer({dest: "public/images/"});

const router = express.Router();

// http://localhost:3000/product/save
router.post("/save",upload.single("imageUrl"),saveProduct);
router.get("/list",productList);

export default router;