import express from "express";
import { getUserByEmail, save, signIn, userList } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

// http://localhost:3000/user/save

router.post("/save",
body("email","Invalid Email Id").isEmail(),
body("password","Password is required").notEmpty(),
body("password","Password must have at least 5 letter").isLength({min:5}),
body("name","Name is required").notEmpty(),
body("name","Only alphabates are allowed").isAlpha(),
save);

router.get("/list",userList);
router.post("/byEmail",getUserByEmail);
router.post("/signin",signIn);
export default router;