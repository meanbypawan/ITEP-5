import express from "express";
import { fetchCategory, saveInBulk } from "../controller/category.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",fetchCategory);
export default router;