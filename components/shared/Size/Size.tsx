import React from 'react';
import clsx from 'clsx';
// styles
import styles from './Size.module.scss';

import { ProductSize } from '@/types/product';

export interface SizeProps {
  id: number;
  name: string;
  quantity?: number;
  active?: boolean;
  disabled?: boolean;
  additionalClassName?: string;
  onSizeClick?: (size: ProductSize) => void;
}

export default function Size({
  id,
  name,
  active,
  disabled,
  quantity,
  onSizeClick,
  additionalClassName,
}: SizeProps) {
  return (
    <button
      className={clsx(
        styles.size,
        additionalClassName,
        active && styles.active,
        disabled && styles.disabled,
      )}
      onClick={() => onSizeClick?.({ id, name, quantity })}>
      {name}
    </button>
  );
}
