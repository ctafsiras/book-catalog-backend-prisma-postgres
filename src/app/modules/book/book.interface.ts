import { Book } from "@prisma/client";

export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type IFilterOptions = {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
};

export type IAllBooks = {
  data: Book[];
  meta: {
    page: number;
    size: number;
    total: number;
    totalPage: number;
  };
};
