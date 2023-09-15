import express from "express";
import { OrderController } from "./order.controller";
import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post("/create-order", auth(UserRole.customer), OrderController.create);
router.get(
  "/",
  auth(UserRole.admin, UserRole.customer),
  OrderController.getAll
);
router.get(
  "/:id",
  auth(UserRole.admin, UserRole.customer),
  OrderController.getOne
);

export const OrderRoute = router;
