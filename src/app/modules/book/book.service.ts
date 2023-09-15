import prisma from "../../../shared/prisma";
import { Book } from "@prisma/client";

const create = async (data: Book): Promise<Book> => {
  data.publicationDate = new Date(data.publicationDate);
  const book = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return book;
};

const getAll = async (): Promise<Book[]> => {
  const books = await prisma.book.findMany({
    include: {
      category: true,
    },
  });
  return books;
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
  getOne,
  update,
  remove,
};
