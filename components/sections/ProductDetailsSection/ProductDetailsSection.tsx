import React from 'react';
// components
import ProductTools from './ProductTools/ProductTools';
import Quantity from './Quantity/Quantity';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import PaymentOptions from './PaymentOptions/PaymentOptions';
import Price from './Price/Price';
import SaleTimer from './SaleTimer/SaleTimer';
import SizePicker from './SizePicker/SizePicker';
import Gallery from './Gallery/Gallery';
import StockIndicator from '@/components/sections/ProductDetailsSection/StockIndicator/StockIndicator';
import Container from '@/components/shared/Container';
// types
import { ProductWithRelations } from '@/types/product';
// styles
import styles from './ProductDetailsSection.module.scss';

export default function ProductDetailsSection({ product }: { product: ProductWithRelations }) {
  const { name, img, price, stock, sizes, discount } = product;
  const endTimeForSale = 259200 * 1000;

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
          <StockIndicator stock={stock} maxStock={100} />
          <SizePicker sizes={sizes} />
          <Quantity />
          <ProductTools />
          <DeliveryInfo />
          <PaymentOptions />
        </div>
      </Container>
    </section>
  );
}
