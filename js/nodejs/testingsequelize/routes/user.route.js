import express from "express";
import { getUserByEmail, save, userList } from "../controller/user.controller.js";
const router = express.Router();

// http://localhost:3000/user/save
router.post("/save",save);
router.get("/list",userList);
router.post("/byEmail",getUserByEmail);
export default router;