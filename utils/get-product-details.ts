import { ProductDTO } from '@/services/dto/product.dto';
import { ProductWithRelations } from '@/types/product';
import { recalcPriceWithDiscount } from '@/utils/recalc-price-with-discount';
import { parseProductImages } from './parseProductImages';

export function getProductDetails(product: ProductWithRelations): ProductDTO {
  let price = product.price;

  if (product.discount && product.discount.endDate && product.discount.endDate.getTime() > Date.now()) {
    price = recalcPriceWithDiscount(product.price, product.discount.percent);
  }

  return {
    id: product.id,
    name: product.name,
    price: price,
    img: parseProductImages(product.img),
    discount: product.discount,
    stock: product.stock,
    sizes: product.sizes,
    rating: product.rating,
  };
}
