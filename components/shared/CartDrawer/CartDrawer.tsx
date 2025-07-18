'use client';
import React from 'react';
import useCartStore from '@/store/useCartStore';
import EmptyCartImage from '@/public/img/cart/empty-cart.png';
import Image from 'next/image';
// components
import CartDrawerHeader from './CartDrawerHeader/CartDrawerHeader';
import CartDrawerFooter from './CartDrawerFooter/CartDrawerFooter';
import CartDrawerItem from './CartDrawerItem/CartDrawerItem';
import { Drawer } from '@mui/material';
// styles
import styles from './CartDrawer.module.scss';

export default function CartDrawer() {
  const { close, isOpen, items, subtotal, updateItemQuantity } = useCartStore();

  return (
    <Drawer open={isOpen} anchor="right" onClose={close} sx={{ transform: 'none' }}>
      <div className={styles['mini-shopping-cart']}>
        <CartDrawerHeader onClose={close} isEmpty={items.length === 0} />

        {items.length === 0 ? (
          <div className={styles.empty}>
            <Image src={EmptyCartImage} alt="empty cart" />
          </div>
        ) : (
          <div className={styles.list}>
            {items.map((item, index) => (
              <CartDrawerItem item={item} key={index} onQuantityChange={updateItemQuantity} />
            ))}
          </div>
        )}

        <CartDrawerFooter total={subtotal} />
      </div>
    </Drawer>
  );
}
