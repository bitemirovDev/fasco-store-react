import { CartItemDTO } from "@/services/dto/cart.dto";
import { CartStateItem } from "@/store/useCartDrawer";
import { recalcPriceWithDiscount } from "./recalc-cost-discount";

export function getCartItemDetails(cartItem: CartItemDTO): CartStateItem {
  const selectedSize = cartItem.product.availableSizes.find(
    (item) => item.size.id === cartItem.sizeId
  );

  const totalAmount =
    (cartItem.product.discount
      ? Number(
          recalcPriceWithDiscount(
            cartItem.product.price,
            cartItem.product.discount.percent
          )
        )
      : cartItem.product.price) * cartItem.quantity;

  return {
    id: cartItem.id,
    quantity: cartItem.quantity,
    img: cartItem.product.img.main,
    name: cartItem.product.name,
    size: {
      id: selectedSize.size.id,
      name: selectedSize.size.name,
    },
    totalAmount: totalAmount,
  };
}
