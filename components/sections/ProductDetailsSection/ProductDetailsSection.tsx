'use client';
import React, { useEffect, useState } from 'react';
import { getProductDetails } from '@/utils/get-product-details';
import useCartStore from '@/store/useCartStore';
import { Toaster } from 'react-hot-toast';
import { successNotify, errorNotify } from '@/lib/notifications';
// components
import { Container } from '@/components/shared';
import { Button } from '@/components/ui';
import FavoritesButton from '@/components/shared/FavoritesButton/FavoritesButton';
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
import useFavoritesStore from '@/store/useFavoritesStore';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const { name, img, price, sizes, discount, stock, id } = getProductDetails(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [saleEndTime, setSaleEndTime] = useState<number | null>(null);
  const { addItemToCart } = useCartStore();
  const { addItemToFavorites } = useFavoritesStore();

  useEffect(() => {
    const defaultSelectedSize = sizes.find((item) => item.quantity > 0);
    if (defaultSelectedSize) setSelectedSize(defaultSelectedSize);
    if (discount) setSaleEndTime(discount.endDate.getTime() - Date.now());
  }, []);

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);

  const stockToShow = selectedSize ? selectedSize.quantity : stock;

  const handleAddToCart = () => {
    const result = addItemToCart({
      id: product.id + selectedSize.name + selectedSize.quantity,
      productId: id,
      quantity: 1,
      img: img.main,
      name: name,
      size: selectedSize,
      price: price,
      totalAmount: price,
    });

    if (result.success) {
      successNotify(result.success);
    } else {
      errorNotify(result.error);
    }
  };

  const handleAddToFavorites = () => {
    const result = addItemToFavorites({
      id: product.id + selectedSize.name,
      productId: id,
      quantity: 1,
      img: img.main,
      name: name,
      size: selectedSize,
      price: price,
      totalAmount: price,
    });

    if (result.success) {
      successNotify(result.success);
    } else {
      errorNotify(result.error);
    }
  };

  const isDiscounted = discount && saleEndTime > 0;

  return (
    <>
      <section className={styles.product}>
        <Container className="container d-flex gap-50 jc-sb">
          <div className={styles.media}>
            <Gallery images={img} />
          </div>
          <div className={styles.details}>
            <div className={styles.title}>
              <h4>{name}</h4>
            </div>

            <div className="flex justify-between items-center mb-4 pr-2">
              <Price
                priceWithDiscount={price}
                price={product.price}
                discountPercent={isDiscounted ? product.discount?.percent : null}
              />
              <FavoritesButton onClick={handleAddToFavorites} />
            </div>

            {isDiscounted && <SaleTimer title={'Hurry up! Sale ends in :'} endTime={saleEndTime} />}

            <StockIndicator stock={stockToShow} maxStock={100} />
            <SizePicker availableSizes={sizes} selectedSize={selectedSize} onChange={handleSizeClick} />
            <div className={styles['add-button']}>
              <Button onClick={() => handleAddToCart()} className="btn--primary btn--wide">
                Add to cart
              </Button>
            </div>
            <ProductTools />
            <DeliveryInfo />
            <PaymentOptions />
          </div>
        </Container>
      </section>

      <Toaster />
    </>
  );
}
