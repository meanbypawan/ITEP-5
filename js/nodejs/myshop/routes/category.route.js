import express from "express";
import { categoryList, deleteCategory, getCategoryById, saveCategory } from "../controller/category.controller.js";

const router = express.Router();

// http://localhost:3000/category/save
router.post("/save",saveCategory);
router.get("/list",categoryList);

// http://localhost:3000/category/2000
router.get("/:categoryId",getCategoryById);

// http://localhost:3000/category/2000
router.delete("/:categoryKiId",deleteCategory);
export default router;