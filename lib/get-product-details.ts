import { ProductDTO } from './../services/dto/product.dto';
import { ProductWithRelations } from './../types/product';

export function getProductDetails(product: ProductWithRelations): ProductDTO {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    discount: product.discount,
    stock: product.stock,
    sizes: product.sizes.map((item) => ({
      id: item.size.id,
      name: item.size.name,
      quantity: item.quantity,
    })),
  };
}
