import catchAsync from "../../../shared/catchAsync";
import { OrderService } from "./order.service";

const create = catchAsync(async (req, res) => {
  const order = await OrderService.create(req.body);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Order created successfully",
    data: order,
  });
});

const getAll = catchAsync(async (req, res) => {
  const orders = await OrderService.getAll();
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Orders retrieved successfully",
    data: orders,
  });
});

const getOne = catchAsync(async (req, res) => {
  const order = await OrderService.getOne(req.params.id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Order retrieved successfully",
    data: order,
  });
});

// const update = catchAsync(async (req, res) => {
//   const order = await OrderService.update(req.params.id, req.body);
//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Order updated successfully",
//     data: order,
//   });
// });

// const remove = catchAsync(async (req, res) => {
//   const order = await OrderService.remove(req.params.id);
//   res.status(200).json({
//     success: true,
//     statusCode: 200,
//     message: "Order deleted successfully",
//     data: order,
//   });
// });

export const OrderController = {
  create,
  getAll,
  getOne,
};
