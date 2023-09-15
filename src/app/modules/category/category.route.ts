import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

router.post("/create-category", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.patch("/:id", CategoryController.update);
router.delete("/:id", CategoryController.remove);

export const CategoryRoute = router;
