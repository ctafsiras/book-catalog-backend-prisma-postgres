import catchAsync from "../../../shared/catchAsync";
import { CategoryService } from "./category.service";

const create = catchAsync(async (req, res) => {
  const category = await CategoryService.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Category created successfully",
    data: category,
  });
});

const getAll = catchAsync(async (req, res) => {
  const categories = await CategoryService.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Categorys retrieved successfully",
    data: categories,
  });
});

const getOne = catchAsync(async (req, res) => {
  const category = await CategoryService.getOne(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Category retrieved successfully",
    data: category,
  });
});

const update = catchAsync(async (req, res) => {
  const category = await CategoryService.update(req.params.id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Category updated successfully",
    data: category,
  });
});

const remove = catchAsync(async (req, res) => {
  const category = await CategoryService.remove(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Category deleted successfully",
    data: category,
  });
});

export const CategoryController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
