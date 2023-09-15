import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";

const create = catchAsync(async (req, res) => {
  const user = await UserService.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "User created successfully",
    data: user,
  });
});

const getAll = catchAsync(async (req, res) => {
  const users = await UserService.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Users retrieved successfully",
    data: users,
  });
});

const getOne = catchAsync(async (req, res) => {
  const user = await UserService.getOne(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User retrieved successfully",
    data: user,
  });
});

const update = catchAsync(async (req, res) => {
  const user = await UserService.update(req.params.id, req.body);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User updated successfully",
    data: user,
  });
});

const remove = catchAsync(async (req, res) => {
  const user = await UserService.remove(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User deleted successfully",
    data: user,
  });
});

export const UserController = {
  create,
  getAll,
  getOne,
  update,
  remove,
};