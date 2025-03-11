'use client';

import React, { useEffect, useState } from 'react';
import { getProductDetails } from '@/lib/get-product-details';

// components
import { Container } from '@/components/shared';
import { Button } from '@/components/ui';
import {
  DeliveryInfo,
  PaymentOptions,
  Gallery,
  Price,
  ProductTools,
  SaleTimer,
  SizePicker,
  StockIndicator,
} from './index';
// types
import { ProductWithRelations } from '@/types/product';
import { ProductSize } from '@/types/product';
// styles
import styles from './ProductDetailsSection.module.scss';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const { name, img, price, sizes, discount, stock } = getProductDetails(product);
  const endTimeForSaleTimer = discount ? discount.endDate.getTime() - Date.now() : null;
  const stockToShow = selectedSize ? selectedSize.quantity : stock;

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);

  useEffect(() => {
    const defaultActiveSize = sizes.find((item) => item.quantity > 0);
    if (defaultActiveSize) setSelectedSize(defaultActiveSize);
  }, []);

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

          {discount && <SaleTimer title={'Hurry up! Sale ends in :'} endTime={endTimeForSaleTimer} />}

          <StockIndicator stock={stockToShow} maxStock={100} />
          <SizePicker availableSizes={sizes} selectedSize={selectedSize} onChange={handleSizeClick} />
          <div className={styles['add-to-cart-button']}>
            <Button className="btn--primary btn--wide">Add to cart</Button>
          </div>
          <ProductTools />
          <DeliveryInfo />
          <PaymentOptions />
        </div>
      </Container>
    </section>
  );
}
