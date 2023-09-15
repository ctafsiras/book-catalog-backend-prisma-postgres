import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/auth/signup", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.remove);

export const UserRoute = router;
