'use client';
import styles from './MiniCart.module.scss';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import clsx from 'clsx';

import useMiniCart from '@/hooks/useMiniCart';
import React, { useRef, useEffect } from 'react';
import { useClickAway } from 'react-use';

export default function MiniCart() {
  const miniCartRef = useRef(null);
  const miniCart = useMiniCart();

  useEffect(() => {
    if (miniCart.isOpen) {
      miniCart.open();
    } else {
      miniCart.close();
    }
  }, []);

  useClickAway(miniCartRef, miniCart.close);

  return (
    <>
      <div
        ref={miniCartRef}
        className={clsx(styles['mini-shopping-cart'], miniCart.isOpen ? styles.active : '')}>
        <div className={styles.header}>
          <h2 className={styles.title}>Shopping Cart</h2>
          <p className={styles.desc}>
            Buy <span>$122.35</span> more and get <span>free shipping</span>
          </p>

          <div className={styles.close} onClick={miniCart.close}>
            <Image width={16} height={16} src="/img/icons/cancel.svg" alt="cancel button" />
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles['product-img']}>
            <Image fill src="/img/products/aape-1/205316648-1-grey.avif" alt="product image" />
          </div>
          <div className={styles['product-details']}>
            <p className={styles['product-title']}>Aape By A Bathing Ape ribbed beanie in grey</p>
            <p className={styles['product-size']}>
              Size:
              <span>M</span>
            </p>
            <p className={styles['product-quantity']}>
              Quantity:
              <span>1</span>
            </p>
            <span className={styles['product-price']}>$39.80</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles['footer-total']}>
            <p>Subtotal</p>
            <span>$100.00</span>
          </div>
          <div className={styles['footer-btn']}>
            <Button className="btn--small btn--primary btn--wide">Checkout</Button>
          </div>
          <a className={styles['footer-link']} href="#!">
            View Cart
          </a>
        </div>
      </div>

      <div className={clsx(styles.overlay, miniCart.isOpen ? styles.active : '')}></div>
    </>
  );
}
