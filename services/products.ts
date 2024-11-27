import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } }))
    .data;
};

export const deals = async (): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.DEALS_PRODUCTS)).data;
};

export const newArrivals = async (category?: number): Promise<Product[]> => {
  return (
    await axiosInstance.get<Product[]>(
      ApiRoutes.NEW_ARRIVALS_PRODUCTS,
      category ? { params: { category } } : null,
    )
  ).data;
};

export const getAll = async () => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS)).data;
};
