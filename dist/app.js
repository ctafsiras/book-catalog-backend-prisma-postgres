"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const user_route_1 = require("./app/modules/user/user.route");
const category_route_1 = require("./app/modules/category/category.route");
const book_route_1 = require("./app/modules/book/book.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", user_route_1.UserRoute);
app.use("/api/v1/categories", category_route_1.CategoryRoute);
app.use("/api/v1/books", book_route_1.BookRoute);
app.use("/api/v1/orders", order_route_1.OrderRoute);
app.get("/", (req, res) => {
    res.send("Welcome to the Bookstore API");
});
exports.default = app;
