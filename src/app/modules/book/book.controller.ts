import catchAsync from "../../../shared/catchAsync";
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
  const books = await BookService.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: books,
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
  getOne,
  update,
  remove,
};
