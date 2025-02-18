import React from "react";
import Image from "next/image";
import { formatToTwoDecimal } from "@/utils/formatToTwoDecimal";

// styles
import styles from "./CartDrawerHeader.module.scss";

interface CartDrawerHeaderProps {
  onClose: () => void;
  freeShipping: {
    status: boolean;
    more: number;
  };
}

export default function CartDrawerHeader({
  onClose,
  freeShipping,
}: CartDrawerHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Shopping Cart</h2>

      <p className={styles.desc}>
        {!freeShipping.status ? (
          <>
            Buy <span>${formatToTwoDecimal(freeShipping.more)}</span> more and
            get <span>free shipping</span>
          </>
        ) : (
          <>
            Delivery will be <span>free</span>
          </>
        )}
      </p>

      <div className={styles.close} onClick={onClose}>
        <Image
          width={16}
          height={16}
          src="/img/icons/cancel.svg"
          alt="cancel button"
        />
      </div>
    </div>
  );
}
