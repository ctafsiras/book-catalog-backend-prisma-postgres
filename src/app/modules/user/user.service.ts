import prisma from "../../../shared/prisma";
import { User } from "@prisma/client";

const create = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

const getAll = async (): Promise<User[]> => {
  const users = await prisma.user.findMany();
  return users;
};

const getOne = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

const update = async (id: string, data: Partial<User>): Promise<User> => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
};

const remove = async (id: string): Promise<User> => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};

export const UserService = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
