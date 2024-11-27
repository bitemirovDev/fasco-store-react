'use client';
import styles from './SizePicker.module.scss';
import { Size } from '@/components/ui/Size/Size';
import { useEffect, useState } from 'react';

import { Sizes } from '../ProductDetailsSection';

type SizePickerProps = {
  sizes: Sizes[];
};

type SelectedSizeProps = {
  id: number;
  name: string;
};

export default function SizePicker({ sizes }: SizePickerProps) {
  const [selectedSize, setSelectedSize] = useState<SelectedSizeProps | null>(null);

  const handleSizeClick = (value: string) => {
    const size = sizes.find((item) => item.size.id === Number(value));
    if (size) setSelectedSize({ id: size.size.id, name: size.size.name });
  };

  useEffect(() => {
    const defaultSize = sizes.find((item) => item.quantity > 0)?.size;
    if (defaultSize) setSelectedSize(defaultSize);
  }, [sizes]);

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
          sizes.map((item) => (
            <Size
              key={item.size.id}
              value={String(item.size.id)}
              text={item.size.name}
              onSizeClick={handleSizeClick}
              disabled={item.quantity === 0}
              active={selectedSize?.id === item.size.id}
            />
          ))}
      </ul>
    </div>
  );
}
