import express from "express";
import { addToCart } from "../controller/cart.controller.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.post("/add-to-cart",verifyToken,addToCart);
export default router;