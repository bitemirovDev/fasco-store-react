import React from 'react';
// components
import { Size } from '@/components/shared';
// types & interfaces
import { ProductSize } from '@/types/product';
// styles
import styles from './SizePicker.module.scss';

type SizePickerProps = {
  availableSizes: ProductSize[];
  selectedSize: ProductSize;
  onChange: (size: ProductSize | string) => void;
};

export default function SizePicker({ availableSizes, selectedSize, onChange }: SizePickerProps) {
  return (
    <div className={styles.sizes}>
      <p className={styles['sizes-selected']}>
        Size: <span>{selectedSize?.name}</span>
      </p>

      {availableSizes.length > 1 && (
        <ul className={styles['sizes-variants']}>
          {['One Size', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((item, index) => {
            const findedSize = availableSizes.find((size) => size.name === item);

            if (!findedSize && item === 'One Size') return;
            if (!findedSize) return <Size mode="single" key={index} name={item} disabled onClickSize={onChange} />;

            return (
              <Size
                id={findedSize.id}
                key={index}
                mode="single"
                name={findedSize.name}
                quantity={findedSize.quantity}
                active={selectedSize?.name === item}
                disabled={!findedSize.quantity}
                onClickSize={onChange}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
