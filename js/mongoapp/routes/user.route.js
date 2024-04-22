import express from "express";
import { allUser, signIn, signUp } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",body("username","username is required").notEmpty(),
body("password").notEmpty(),
body("contact").notEmpty().isNumeric(),signUp);

router.post("/signin",signIn);
router.get("/list",allUser);
export default router;

