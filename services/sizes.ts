import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { Size } from '@prisma/client';

export const getAll = async (): Promise<Size[]> => {
  return (await axiosInstance.get<Size[]>(ApiRoutes.SIZES)).data;
};
