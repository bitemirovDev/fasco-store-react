import React from "react";
// components
import { Size } from "@/components/shared";
// types & interfaces
import { ProductSize } from "@/types/product";
// import { SelectedSizeProps } from '../ProductDetailsSection';
// styles
import styles from "./SizePicker.module.scss";

type SizePickerProps = {
  availableSizes: ProductSize[];
  selectedSize: ProductSize;
  onChange: (size: ProductSize) => void;
};

export default function SizePicker({
  availableSizes,
  selectedSize,
  onChange,
}: SizePickerProps) {
  if (availableSizes.length === 0 || availableSizes === null) {
    return (
      <p className={styles["sizes-selected"]}>
        Size: <span>One size</span>
      </p>
    );
  }

  return (
    <div className={styles.sizes}>
      <p className={styles["sizes-selected"]}>
        Size: <span>{selectedSize?.name}</span>
      </p>
      <ul className={styles["sizes-variants"]}>
        {availableSizes &&
          availableSizes.map((item, index) => (
            <Size
              key={index}
              id={item.id}
              stock={item.stock}
              name={item.name}
              onSizeClick={onChange}
              disabled={item.stock === 0}
              active={selectedSize?.id === item.id}
            />
          ))}
      </ul>
    </div>
  );
}
