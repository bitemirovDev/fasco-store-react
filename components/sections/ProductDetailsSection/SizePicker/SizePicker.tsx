import React from 'react';
// components
import { Size } from '@/components/shared';
// types & interfaces
import { ProductSize } from '@/types/product';
// import { SelectedSizeProps } from '../ProductDetailsSection';
// styles
import styles from './SizePicker.module.scss';

type SizePickerProps = {
  sizes: ProductSize[];
  selectedSize: ProductSize;
  onChange: (size: ProductSize) => void;
};

export default function SizePicker({ sizes, selectedSize, onChange }: SizePickerProps) {
  if (sizes.length === 0 || sizes === null) {
    return (
      <p className={styles['sizes-selected']}>
        Size: <span>One size</span>
      </p>
    );
  }

  return (
    <div className={styles.sizes}>
      <p className={styles['sizes-selected']}>
        Size: <span>{selectedSize?.name}</span>
      </p>
      <ul className={styles['sizes-variants']}>
        {sizes &&
          sizes.map((item, index) => (
            <Size
              key={index}
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              onSizeClick={onChange}
              disabled={item.quantity === 0}
              active={selectedSize?.id === item.id}
            />
          ))}
      </ul>
    </div>
  );
}
