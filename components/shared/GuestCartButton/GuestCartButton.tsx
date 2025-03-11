"use client";
import { SVGIcon } from "@/components/ui";
import GuestCartIcon from "@/public/img/icons/guest_cart.svg";
import styles from "./GuestCartButton.module.scss";
import useCartDrawer from "@/store/useCartStore";

export default function GuestCartButton() {
  const cartDrawer = useCartDrawer();
  return (
    <button className={styles.cart} onClick={cartDrawer.open}>
      <SVGIcon
        icon={GuestCartIcon}
        width={24}
        height={24}
        className={styles.icon}
      />
    </button>
  );
}
