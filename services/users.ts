import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { User } from '@prisma/client';

export const getAll = async (): Promise<User[]> => {
  return (await axiosInstance.get<User[]>(ApiRoutes.USERS)).data;
};
