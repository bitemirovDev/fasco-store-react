import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { Collection } from '@prisma/client';

export const getAll = async (): Promise<Collection[]> => {
  return (await axiosInstance.get<Collection[]>(ApiRoutes.COLLECTIONS)).data;
};
