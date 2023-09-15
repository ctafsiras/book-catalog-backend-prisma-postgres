import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router.post("/create-book", BookController.create);
router.get("/", BookController.getAll);
router.get("/:id", BookController.getOne);
router.patch("/:id", BookController.update);
router.delete("/:id", BookController.remove);

export const BookRoute = router;
