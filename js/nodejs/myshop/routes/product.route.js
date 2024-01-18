import express from "express";
import { productList, saveProduct } from "../controller/product.controller.js";
import multer from "multer";
import { verifyToken } from "../middleware/auth.js";

const upload = multer({dest: "public/images/"});

const router = express.Router();

// http://localhost:3000/product/save
router.post("/save",upload.single("imageUrl"),saveProduct);
router.get("/list",verifyToken,productList);

export default router;