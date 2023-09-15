import catchAsync from "../../../shared/catchAsync";
import { paginationHelpers } from "../../../shared/pagination";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./book.constant";
import { BookService } from "./book.service";

const create = catchAsync(async (req, res) => {
  const book = await BookService.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: book,
  });
});

const getAll = catchAsync(async (req, res) => {
  const filterOptions = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationHelpers.paginationFields);
  const books = await BookService.getAll(filterOptions, paginationOptions);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    meta: books.meta,
    data: books.data,
  });
});
const getAllByCategory = catchAsync(async (req, res) => {
  const categoryId = req.params.categoryId;
  const filterOptions = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationHelpers.paginationFields);
  const books = await BookService.getAllByCategory(categoryId, filterOptions, paginationOptions);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    meta: books.meta,
    data: books.data,
  });
});

const getOne = catchAsync(async (req, res) => {
  const book = await BookService.getOne(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Book retrieved successfully",
    data: book,
  });
});

const update = catchAsync(async (req, res) => {
  const book = await BookService.update(req.params.id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Book updated successfully",
    data: book,
  });
});

const remove = catchAsync(async (req, res) => {
  const book = await BookService.remove(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Book deleted successfully",
    data: book,
  });
});

export const BookController = {
  create,
  getAll,
  getAllByCategory,
  getOne,
  update,
  remove,
};
