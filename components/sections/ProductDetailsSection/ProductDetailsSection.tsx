"use client";

import React, { useEffect, useState } from "react";
import useCartDrawer from "@/store/useCartDrawer";
import { getProductDetails } from "@/lib/get-product-details";

// components
import { Container } from "@/components/shared";
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
} from "./index";
// types
import { ProductWithRelations, ProductSize } from "@/types/product";
// styles
import styles from "./ProductDetailsSection.module.scss";

export default function ProductDetailsSection({
  product,
}: {
  product: ProductWithRelations;
}) {
  const { name, img, price, availableSizes, discount, stock } =
    getProductDetails(product);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const endTimeForSale = 259200 * 1000;

  const handleSizeClick = (size: ProductSize) => setSelectedSize(size);
  const handleQuantityChange = (quantity: number) =>
    setSelectedQuantity(quantity);

  useEffect(() => {
    const defaultSize = availableSizes.find((item) => item.stock > 0);
    if (defaultSize) setSelectedSize(defaultSize);
  }, []);

  const cartDrawer = useCartDrawer();

  const onAddToCart = () => {
    cartDrawer.addCartItem({
      sizeId: selectedSize ? selectedSize.id : null,
      productId: product.id,
      quantity: selectedQuantity,
    });
  };

  const stockToShow = selectedSize ? selectedSize.stock : stock;
  const maxQuantityToBuy = selectedSize ? selectedSize.stock : stock;

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
          <SaleTimer
            title={"Hurry up! Sale ends in :"}
            endTime={endTimeForSale}
          />
          <StockIndicator stock={stockToShow} maxStock={100} />
          <SizePicker
            availableSizes={availableSizes}
            selectedSize={selectedSize}
            onChange={handleSizeClick}
          />
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
