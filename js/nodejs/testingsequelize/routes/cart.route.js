import express from "express";
import { addToCart, fetchCartItems, removeFromCart } from "../controller/cart.controller.js";
import { body } from "express-validator";
const router  = express.Router();

router.post("/add-to-cart",body('userId','Invalid user id').notEmpty().isNumeric(),body('productId','Invalid product id').notEmpty().isNumeric(),addToCart);

router.get("/list/:userId",fetchCartItems);

router.delete("/remove-from-cart/:userId/:productId",removeFromCart);
export default router;