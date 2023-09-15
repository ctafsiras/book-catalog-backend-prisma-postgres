import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { UserRoute } from "./app/modules/user/user.route";
import { CategoryRoute } from "./app/modules/category/category.route";
import { BookRoute } from "./app/modules/book/book.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoute);
app.use("/api/v1/categories", CategoryRoute);
app.use("/api/v1/books", BookRoute);
app.use("/api/v1/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Bookstore API");
});

export default app;
