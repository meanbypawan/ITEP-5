import express from "express";
import Admin from '../model/admin.model.js';
import { signUp, signIn } from "../controller/admin.controller.js";
const router = express.Router();

router.post("/signup",signUp);

router.post("/signin",signIn);

export default router;