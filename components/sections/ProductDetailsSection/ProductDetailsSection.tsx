'use client';

import React, { useEffect, useState } from 'react';
import { getProductDetails } from '@/lib/get-product-details';
import useCartStore from '@/store/useCartStore';
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
import type { ProductWithRelations } from '@/types/product';
import type { ProductSize } from '@/types/product';
// styles
import styles from './ProductDetailsSection.module.scss';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const { name, img, price, sizes, discount, stock, id } = getProductDetails(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);

  const endTimeForSaleTimer = discount ? discount.endDate.getTime() - Date.now() : null;
  const stockToShow = selectedSize ? selectedSize.quantity : stock;

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);

  useEffect(() => {
    const defaultActiveSize = sizes.find((item) => item.quantity > 0);
    if (defaultActiveSize) setSelectedSize(defaultActiveSize);
  }, []);

  const cartStore = useCartStore();

  const addItemToCart = () => {
    cartStore.addItem({
      id: Math.random().toString(),
      productId: id,
      quantity: 1,
      img: img.main,
      name: name,
      size: selectedSize.name,
      totalAmount: price,
    });
  };

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
          <Price priceWithDiscount={price} price={product.price} discountPercent={product.discount?.percent} />

          {discount && <SaleTimer title={'Hurry up! Sale ends in :'} endTime={endTimeForSaleTimer} />}

          <StockIndicator stock={stockToShow} maxStock={100} />
          <SizePicker availableSizes={sizes} selectedSize={selectedSize} onChange={handleSizeClick} />
          <div className={styles['add-to-cart-button']}>
            <Button onClick={() => addItemToCart()} className="btn--primary btn--wide">
              Add to cart
            </Button>
          </div>
          <ProductTools />
          <DeliveryInfo />
          <PaymentOptions />
        </div>
      </Container>
    </section>
  );
}
