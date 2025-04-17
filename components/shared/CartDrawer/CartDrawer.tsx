'use client';
import React from 'react';
import useCartStore from '@/store/useCartStore';
import { useEffect } from 'react';
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

  const onQuantityChange = (id: string, type: string, quantity: number) => {
    const newQuantity = type === 'increment' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

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
              <CartDrawerItem
                key={index}
                id={item.id}
                img={`/img/products/${item.img}`}
                name={item.name}
                size={item.size}
                selectedQuantity={item.quantity}
                total={item.totalAmount}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </div>
        )}

        <CartDrawerFooter total={subtotal} />
      </div>
    </Drawer>
  );
}
