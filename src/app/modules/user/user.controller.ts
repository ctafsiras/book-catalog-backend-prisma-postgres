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

export const UserController = {
  create,
};
