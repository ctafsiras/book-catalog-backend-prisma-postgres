import prisma from "../../../shared/prisma";
import { Order } from "@prisma/client";

const create = async (data: any): Promise<Order> => {
  const order = await prisma.order.create({
    data,
  });
  return order;
};

const getAll = async (): Promise<Order[]> => {
  const orders = await prisma.order.findMany({});
  return orders;
};

const getOne = async (id: string): Promise<Order> => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
  });
  if (!order) {
    throw new Error("Order not found");
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
