import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
// components
import { Breadcrumbs, QuantityCounter, Container } from '@/components/shared';
import { Button } from '@/components/ui/Button';
// styles
import styles from './CartSection.module.scss';

export default function CartSection() {
  return (
    <section className={styles['shopping-cart']}>
      <Container>
        <div className={styles.header}>
          <h2 className={clsx(styles.title, 'headline-3')}>Shopping Cart</h2>
          <Breadcrumbs />
        </div>

        <table className={styles.table}>
          <thead className={styles['table-header']}>
            <tr className={styles.row}>
              <th className={clsx(styles.column, styles['column--product'])}>Product</th>
              <th className={clsx(styles.column, styles['column--price'])}>Price</th>
              <th className={clsx(styles.column, styles['column--quantity'])}>Quantity</th>
              <th className={clsx(styles.column, styles['column--total'])}>Total</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            <tr className={styles.row}>
              <td className={styles.item}>
                <div className={styles.product}>
                  <div className={styles['product-image']}>
                    <Image
                      fill
                      src="/img/products/aape-1/205316648-1-grey.avif"
                      alt=""
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.description}>
                    <h4 className={styles.name}>Aape By A Bathing Ape ribbed beanie in grey</h4>
                    <p className={styles.size}>Size: M</p>
                    <a href="#!" className={styles.remove}>
                      Remove
                    </a>
                  </div>
                </div>
              </td>
              <td className={styles.price}>$14.90</td>
              <td className={styles.quantity}>
                <QuantityCounter maxQuantity={10} />
              </td>
              <td className={styles.total}>$14.90</td>
            </tr>
            <tr className={styles.row}>
              <td className={styles.item}>
                <div className={styles.product}>
                  <div className={styles['product-image']}>
                    <Image
                      fill
                      src="/img/products/aape-1/205316648-1-grey.avif"
                      alt=""
                      className={styles.image}
                    />
                  </div>

                  <div className={styles.description}>
                    <h4 className={styles.name}>Aape By A Bathing Ape ribbed beanie in grey</h4>
                    <p className={styles.size}>Size: M</p>
                    <a href="#!" className={styles.remove}>
                      Remove
                    </a>
                  </div>
                </div>
              </td>
              <td className={styles.price}>$14.90</td>
              <td className={styles.quantity}>
                <QuantityCounter maxQuantity={10} />
              </td>
              <td className={styles.total}>$14.90</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.summary}>
          <div className={styles['summary-container']}>
            <div className={styles['gift-wrap']}>
              <input
                type="checkbox"
                id="gift-wrap-checkbox"
                className={styles['gift-wrap__checkbox']}
              />
              <span className={styles['gift-wrap__checkbox-span']}></span>
              <label htmlFor="gift-wrap-checkbox" className={styles['gift-wrap__label']}>
                For <span>$10.00</span> please wrap the product
              </label>
            </div>

            <p className={styles['subtotal']}>
              <span className={styles['subtotal-label']}>Subtotal</span>
              <span className={styles['subtotal-amount']}>$100.00</span>
            </p>
            <Button className="checkout-button btn--primary btn--wide btn--small">Checkout</Button>
            <a href="#" className={styles['view-cart']}>
              View Cart
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
