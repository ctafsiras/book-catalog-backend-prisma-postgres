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
exports.BookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    data.publicationDate = new Date(data.publicationDate);
    const book = yield prisma_1.default.book.create({
        data,
        include: {
            category: true,
        },
    });
    return book;
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield prisma_1.default.book.findMany({
        include: {
            category: true,
        },
    });
    return books;
});
const getOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.findUnique({
        where: {
            id,
        },
    });
    if (!book) {
        throw new Error("Book not found");
    }
    return book;
});
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.update({
        where: {
            id,
        },
        data,
    });
    return book;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma_1.default.book.delete({
        where: {
            id,
        },
    });
    return book;
});
exports.BookService = {
    create,
    getAll,
    getOne,
    update,
    remove,
};
