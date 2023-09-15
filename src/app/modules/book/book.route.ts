import express from "express";
import { BookController } from "./book.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
const router = express.Router();

router.post("/create-book", auth(UserRole.admin), BookController.create);
router.get("/", BookController.getAll);
router.get("/:categoryId/category", BookController.getAllByCategory);
router.get("/:id", BookController.getOne);
router.patch("/:id", auth(UserRole.admin), BookController.update);
router.delete("/:id", auth(UserRole.admin), BookController.remove);

export const BookRoute = router;
