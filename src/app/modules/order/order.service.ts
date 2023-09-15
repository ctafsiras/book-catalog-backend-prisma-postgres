import prisma from "../../../shared/prisma";
import { Order, UserRole } from "@prisma/client";

const create = async (data: any): Promise<Order> => {
  const order = await prisma.order.create({
    data,
  });
  return order;
};

const getAll = async (user: any): Promise<Order[]> => {
  let orders;
  if (user.role === UserRole.admin) {
    orders = await prisma.order.findMany({});
    return orders;
  } else {
    orders = await prisma.order.findMany({
      where: {
        userId: user.id,
      },
    });
  }
  return orders;
};

const getOne = async (id: string, user: any): Promise<Order> => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });
  if (!order) {
    throw new Error("Order not found");
  }
  if (user.role !== UserRole.admin && order.userId !== user.id) {
    throw new Error("You are not authorized to see this order");
  }
  return order;
};

// const update = async (id: string, data: Partial<Order>): Promise<Order> => {
//   const order = await prisma.order.update({
//     where: {
//       id,
//     },
//     data,
//   });
//   return order;
// };

// const remove = async (id: string): Promise<Order> => {
//   const order = await prisma.order.delete({
//     where: {
//       id,
//     },
//   });
//   return order;
// };

export const OrderService = {
  create,
  getAll,
  getOne,
};
