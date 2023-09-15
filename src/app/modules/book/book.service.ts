import prisma from "../../../shared/prisma";
import { Book } from "@prisma/client";
import {
  IAllBooks,
  IFilterOptions,
  IPaginationOptions,
} from "./book.interface";
import { paginationHelpers } from "../../../shared/pagination";
import { bookSearchableFields } from "./book.constant";

const create = async (data: Book): Promise<Book> => {
  const book = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return book;
};

const getAll = async (
  filterOptions: IFilterOptions,
  paginationOptions: IPaginationOptions
): Promise<IAllBooks> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const { search, ...filtersData } = filterOptions;
  const whereCondition = {};
  if (search) {
    Object.assign(whereCondition, {
      OR: bookSearchableFields.map((field) => ({
        [field]: { contains: search, mode: "insensitive" },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    Object.assign(whereCondition, {
      AND: Object.keys(filtersData).map((key) => ({
        [key]: { contains: (filtersData as any)[key], mode: "insensitive" },
      })),
    });
  }
  const books = await prisma.book.findMany({
    include: {
      category: true,
    },
    skip,
    take: limit,
    where: whereCondition,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  const total = await prisma.book.count();

  return {
    data: books,
    meta: {
      page,
      size: limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
  };
};

const getAllByCategory = async (
  categoryId: string,
  filterOptions: IFilterOptions,
  paginationOptions: IPaginationOptions
): Promise<IAllBooks> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);
  const { search, ...filtersData } = filterOptions;
  const whereCondition = { categoryId };
  if (search) {
    Object.assign(whereCondition, {
      OR: bookSearchableFields.map((field) => ({
        [field]: { contains: search, mode: "insensitive" },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    Object.assign(whereCondition, {
      AND: Object.keys(filtersData).map((key) => ({
        [key]: { contains: (filtersData as any)[key], mode: "insensitive" },
      })),
    });
  }
  const books = await prisma.book.findMany({
    include: {
      category: true,
    },
    skip,
    take: limit,
    where: whereCondition,
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  const total = await prisma.book.count();

  return {
    data: books,
    meta: {
      page,
      size: limit,
      total,
      totalPage: Math.ceil(total / limit),
    },
  };
};

const getOne = async (id: string): Promise<Book> => {
  const book = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  if (!book) {
    throw new Error("Book not found");
  }
  return book;
};

const update = async (id: string, data: Partial<Book>): Promise<Book> => {
  const book = await prisma.book.update({
    where: {
      id,
    },
    data,
  });
  return book;
};

const remove = async (id: string): Promise<Book> => {
  const book = await prisma.book.delete({
    where: {
      id,
    },
  });
  return book;
};

export const BookService = {
  create,
  getAll,
  getAllByCategory,
  getOne,
  update,
  remove,
};
