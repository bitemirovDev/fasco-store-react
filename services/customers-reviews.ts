import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { CustomerReview } from '@prisma/client';

export const getAll = async (): Promise<CustomerReview[]> => {
  return (await axiosInstance.get<CustomerReview[]>(ApiRoutes.CUSTOMERS_REVIEWS)).data;
};
