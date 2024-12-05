import { ProductWithRelations } from '@/types/product';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const search = async (query: string): Promise<ProductWithRelations[]> => {
  return (
    await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
    })
  ).data;
};

export const deals = async (): Promise<ProductWithRelations[]> => {
  return (await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.DEALS_PRODUCTS)).data;
};

export const newArrivals = async (category?: number): Promise<ProductWithRelations[]> => {
  return (
    await axiosInstance.get<ProductWithRelations[]>(
      ApiRoutes.NEW_ARRIVALS_PRODUCTS,
      category ? { params: { category } } : null,
    )
  ).data;
};

export const getAll = async (): Promise<ProductWithRelations[]> => {
  return (await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.PRODUCTS)).data;
};
