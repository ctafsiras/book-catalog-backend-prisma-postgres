"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const book_service_1 = require("./book.service");
const create = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookService.create(req.body);
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Book created successfully",
        data: book,
    });
}));
const getAll = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_service_1.BookService.getAll();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Books retrieved successfully",
        data: books,
    });
}));
const getOne = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookService.getOne(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Book retrieved successfully",
        data: book,
    });
}));
const update = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookService.update(req.params.id, req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Book updated successfully",
        data: book,
    });
}));
const remove = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookService.remove(req.params.id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Book deleted successfully",
        data: book,
    });
}));
exports.BookController = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
