import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { CartDTO } from "./dto/cart.dto";
import { AddCartItemProps } from "@/store/useCartDrawer";

export const getUserCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
};

export const addCartItem = async (item: AddCartItemProps): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>(ApiRoutes.CART, item)).data;
};

export const deleteCartItem = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
};
