'use client';
import React, { useEffect, useState } from 'react';
import { getProductDetails } from '@/utils/get-product-details';
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
import type { ProductWithRelations, ProductSize } from '@/types/product';
// styles
import styles from './ProductDetailsSection.module.scss';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const { name, img, price, sizes, discount, stock, id } = getProductDetails(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [saleEndTime, setSaleEndTime] = useState<number | null>(null);
  const { addItem } = useCartStore();

  useEffect(() => {
    const defaultActiveSize = sizes.find((item) => item.quantity > 0);
    if (defaultActiveSize) setSelectedSize(defaultActiveSize);
    if (discount) setSaleEndTime(discount.endDate.getTime() - Date.now());
  }, []);

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);

  const stockToShow = selectedSize ? selectedSize.quantity : stock;

  const addItemToCart = () => {
    addItem({
      id: product.id + selectedSize.name + selectedSize.quantity,
      productId: id,
      quantity: 1,
      img: img.main,
      name: name,
      size: selectedSize.name,
      price: price,
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

          {discount && <SaleTimer title={'Hurry up! Sale ends in :'} endTime={saleEndTime} />}

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
