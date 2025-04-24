import { ProductDTO } from '@/services/dto/product.dto';
import { ProductWithRelations, ProductImages } from '@/types/product';
import { recalcPriceWithDiscount } from '@/utils/recalc-price-with-discount';
import { parseProductImages } from './parseProductImages';

export function getProductDetails(product: ProductWithRelations): ProductDTO {
  const price = product.discount ? recalcPriceWithDiscount(product.price, product.discount.percent) : product.price;

  return {
    id: product.id,
    name: product.name,
    price: price,
    img: parseProductImages(product.img),
    discount: product.discount,
    stock: product.stock,
    sizes: product.sizes,
  };
}
