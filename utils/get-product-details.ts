import { ProductDTO } from '@/services/dto/product.dto';
import { ProductWithRelations } from '@/types/product';
import { recalcPriceWithDiscount } from '@/utils/recalc-price-with-discount';
import { parseProductImages } from './parseProductImages';

export function getProductDetails(product: ProductWithRelations): ProductDTO {
  const discountTimeLeft = product.discount?.endDate.getTime() - Date.now();
  const price =
    product.discount && discountTimeLeft > 0
      ? recalcPriceWithDiscount(product.price, product.discount.percent)
      : product.price;

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
