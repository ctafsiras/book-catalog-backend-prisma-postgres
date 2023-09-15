import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { UserRoute } from "./app/modules/user/user.route";
import { CategoryRoute } from "./app/modules/category/category.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoute);
app.use("/api/v1/categories", CategoryRoute);

export default app;
