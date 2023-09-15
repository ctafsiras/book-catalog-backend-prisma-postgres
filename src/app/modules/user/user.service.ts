import prisma from "../../../shared/prisma";
import { User } from "@prisma/client";

const create = async (data: User): Promise<User> => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export const UserService = {
  create,
};
