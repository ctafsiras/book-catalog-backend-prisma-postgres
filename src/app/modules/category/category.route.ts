import express from "express";
import { CategoryController } from "./category.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post(
  "/create-category",
  auth(UserRole.admin),
  CategoryController.create
);
router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getOne);
router.patch("/:id", auth(UserRole.admin), CategoryController.update);
router.delete("/:id", auth(UserRole.admin), CategoryController.remove);

export const CategoryRoute = router;
