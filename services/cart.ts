import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constants";
import { CartDTO } from "./dto/cart.dto";

export const getUserCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
};
