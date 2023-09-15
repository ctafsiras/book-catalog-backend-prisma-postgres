import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/create-order", OrderController.create);
router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getOne);

export const OrderRoute = router;
