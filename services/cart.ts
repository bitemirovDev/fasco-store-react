import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { CartDTO } from './dto/cart.dto';

export const getUserCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
};

export const createUserCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>(ApiRoutes.CART)).data;
};

export const deleteCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + id)).data;
};
