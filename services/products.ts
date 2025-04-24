import { ProductWithRelations } from '@/types/product';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

export const searchProducts = async (query: string): Promise<ProductWithRelations[]> => {
  return (
    await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.PRODUCTS + '/search', {
      params: { query },
    })
  ).data;
};

export const dealsProducts = async (): Promise<ProductWithRelations[]> => {
  return (await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.PRODUCTS + '/deals')).data;
};

export const newArrivalsProducts = async (category?: number): Promise<ProductWithRelations[]> => {
  return (
    await axiosInstance.get<ProductWithRelations[]>(
      ApiRoutes.PRODUCTS + '/new-arrivals',
      category ? { params: { category } } : null,
    )
  ).data;
};

export const getProductCategories = async (): Promise<string[]> => {
  return (await axiosInstance.get<string[]>(ApiRoutes.PRODUCTS + '/categories')).data;
};

export const getProductCollections = async (): Promise<string[]> => {
  return (await axiosInstance.get<string[]>(ApiRoutes.PRODUCTS + '/collections')).data;
};

export const getProductBrands = async (): Promise<string[]> => {
  return (await axiosInstance.get<string[]>(ApiRoutes.PRODUCTS + '/brands')).data;
};

export const getAllProducts = async (): Promise<ProductWithRelations[]> => {
  return (await axiosInstance.get<ProductWithRelations[]>(ApiRoutes.PRODUCTS)).data;
};
