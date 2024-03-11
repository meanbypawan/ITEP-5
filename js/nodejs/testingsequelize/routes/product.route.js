import express from "express";
import { getProductList, saveInBulk, getProductByCategory } from "../controller/product.controller.js";

const router = express.Router();
router.post("/save-in-bulk",saveInBulk);
router.get("/list",getProductList);
router.get("/byCategory/:categoryName",getProductByCategory);
export default router;