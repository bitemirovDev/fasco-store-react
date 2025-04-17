import { ProductDTO } from './../services/dto/product.dto';
import { ProductWithRelations } from './../types/product';
import { ProductImages } from '@/types/product';
import { recalcPriceWithDiscount } from './recalc-price-with-discount';

export function getProductDetails(product: ProductWithRelations): ProductDTO {
  const img: ProductImages =
    typeof product.img === 'object' && product.img !== null
      ? (product.img as unknown as ProductImages)
      : { main: '', additional: [] };

  const price = product.discount ? recalcPriceWithDiscount(product.price, product.discount.percent) : product.price;

  return {
    id: product.id,
    name: product.name,
    price: price,
    img: img,
    discount: product.discount,
    stock: product.stock,
    sizes: product.sizes,
  };
}
