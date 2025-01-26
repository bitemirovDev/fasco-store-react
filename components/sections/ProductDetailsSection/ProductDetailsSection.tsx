'use client';

import React, { useEffect, useState } from 'react';
import useCartDrawer from '@/store/useCartDrawer';
import { getProductDetails } from '@/lib/get-product-details';
import { calcTotalProductPrice } from '@/lib/calc-total-product-price';
// components
import { Container } from '@/components/shared';
import {
  DeliveryInfo,
  PaymentOptions,
  Gallery,
  Price,
  ProductTools,
  SaleTimer,
  SizePicker,
  StockIndicator,
  Quantity,
} from './index';
// types
import { ProductWithRelations, ProductSize } from '@/types/product';
// styles
import styles from './ProductDetailsSection.module.scss';
import { recalcPriceWithDiscount } from '@/lib/recalc-cost-discount';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const { name, img, price, sizes, discount, stock } = getProductDetails(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const endTimeForSale = 259200 * 1000;

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);
  const handleQuantityChange = (quantity: number) => setSelectedQuantity(quantity);

  useEffect(() => {
    const defaultSize = sizes.find((item) => item.quantity > 0);
    if (defaultSize) setSelectedSize(defaultSize);
  }, []);

  const cartDrawer = useCartDrawer();

  const onAddToCart = () => {
    cartDrawer.addCartItem({
      id: product.id,
      quantity: selectedQuantity,
      img: img.main,
      name: name,
      size: {
        name: selectedSize.name,
        maxQuantity: selectedSize.quantity,
      },
      total: String(calcTotalProductPrice(price, selectedQuantity, discount)),
    });
  };

  const stockToShow = selectedSize ? selectedSize.quantity : stock;
  const maxQuantityToBuy = selectedSize ? selectedSize.quantity : stock;

  return (
    <section className={styles.product}>
      <Container classNames="d-flex gap-50 jc-sb">
        <div className={styles.media}>
          <Gallery images={img} />
        </div>
        <div className={styles.details}>
          <div className={styles.title}>
            <h4>{name}</h4>
          </div>
          <Price discount={discount} price={price} />
          <SaleTimer title={'Hurry up! Sale ends in :'} endTime={endTimeForSale} />
          <StockIndicator stock={stockToShow} maxStock={100} />
          <SizePicker sizes={sizes} selectedSize={selectedSize} onChange={handleSizeClick} />
          <Quantity
            maxQuantity={maxQuantityToBuy}
            onChange={handleQuantityChange}
            onAddToCart={onAddToCart}
          />
          <ProductTools />
          <DeliveryInfo />
          <PaymentOptions />
        </div>
      </Container>
    </section>
  );
}
