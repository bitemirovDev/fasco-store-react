"use client";
import React from "react";
import useCartDrawer from "@/store/useCartDrawer";
import { useEffect } from "react";
// components
import CartDrawerHeader from "./CartDrawerHeader/CartDrawerHeader";
import CartDrawerFooter from "./CartDrawerFooter/CartDrawerFooter";
import CartDrawerItem from "./CartDrawerItem/CartDrawerItem";
import { Drawer } from "@mui/material";
// styles
import styles from "./CartDrawer.module.scss";

export default function CartDrawer() {
  const { close, fetchCartItems, isOpen, cartItems, totalAmount } =
    useCartDrawer();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      onClose={close}
      sx={{ transform: "none" }}
    >
      <div className={styles["mini-shopping-cart"]}>
        <CartDrawerHeader />
        <div className={styles.list}>
          {cartItems.map((item) => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              img={`/img/products/${item.img}`}
              name={item.name}
              size={item.size}
              selectedQuantity={item.quantity}
              total={item.totalAmount}
            />
          ))}
        </div>
        <CartDrawerFooter total={totalAmount} />
      </div>
    </Drawer>
  );
}
