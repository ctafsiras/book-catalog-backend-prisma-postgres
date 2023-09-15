import express, { Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { UserRoute } from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
