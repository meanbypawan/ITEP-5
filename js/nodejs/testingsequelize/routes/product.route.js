import express from "express";
import { getProductList, saveInBulk } from "../controller/product.controller.js";

const router = express.Router();
router.post("/save-in-bulk",saveInBulk);
router.get("/list",getProductList);
export default router;