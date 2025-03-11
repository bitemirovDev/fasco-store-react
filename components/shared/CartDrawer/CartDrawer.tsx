'use client';
import React from 'react';
import useCartDrawer from '@/store/useCartStore';
import { useEffect } from 'react';
// components
import CartDrawerHeader from './CartDrawerHeader/CartDrawerHeader';
import CartDrawerFooter from './CartDrawerFooter/CartDrawerFooter';
import CartDrawerItem from './CartDrawerItem/CartDrawerItem';
import { Drawer } from '@mui/material';
// styles
import styles from './CartDrawer.module.scss';

export default function CartDrawer() {
  const { close, getItems, isOpen, items, totalAmount, updateItemQuantity } = useCartDrawer();

  useEffect(() => {
    getItems();
  }, [getItems]);

  const onQuantityChange = (id: number, type: string, quantity: number) => {
    const newQuantity = type === 'increment' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Drawer open={isOpen} anchor="right" onClose={close} sx={{ transform: 'none' }}>
      <div className={styles['mini-shopping-cart']}>
        <CartDrawerHeader onClose={close} />
        <div className={styles.list}>
          {items.map((item) => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              img={`/img/products/${item.img}`}
              name={item.title}
              size={item.size}
              selectedQuantity={item.quantity}
              total={item.totalAmount}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
        <CartDrawerFooter total={totalAmount} />
      </div>
    </Drawer>
  );
}
