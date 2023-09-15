import prisma from "../../../shared/prisma";
import { Category } from "@prisma/client";

const create = async (data: Category): Promise<Category> => {
  const category = await prisma.category.create({
    data,
  });
  return category;
};

const getAll = async (): Promise<Category[]> => {
  const categories = await prisma.category.findMany();
  return categories;
};

const getOne = async (id: string): Promise<Category> => {
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      books: true,
    },
  });
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

const update = async (
  id: string,
  data: Partial<Category>
): Promise<Category> => {
  const category = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return category;
};

const remove = async (id: string): Promise<Category> => {
  const category = await prisma.category.delete({
    where: {
      id,
    },
  });
  return category;
};

export const CategoryService = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
