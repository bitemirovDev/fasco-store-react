import React from 'react';
import clsx from 'clsx';
// styles
import styles from './Size.module.scss';
import { ProductSize } from '@/types/product';

export interface SizeProps {
  id?: number;
  name: string;
  quantity?: number;
  active?: boolean;
  disabled?: boolean;
  additionalClassName?: string;
  onClickSize: (size: ProductSize | string) => void;
  mode: 'single' | 'multiple';
}

export default function Size({
  id,
  name,
  active,
  disabled,
  onClickSize,
  quantity,
  additionalClassName,
  mode,
}: SizeProps) {
  const onSizeClickHandler = () => {
    if (mode === 'single' && quantity && id && onClickSize) {
      onClickSize({ id, name, quantity });
    }
    if (mode === 'multiple' && onClickSize) {
      onClickSize(name);
    }
  };

  return (
    <button
      className={clsx(styles.size, additionalClassName, active && styles.active, disabled && styles.disabled)}
      onClick={onSizeClickHandler}
    >
      {name}
    </button>
  );
}
