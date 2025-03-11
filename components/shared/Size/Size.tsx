import React from 'react';
import clsx from 'clsx';
import { SelectedSizeProps } from '@/components/sections/ProductDetailsSection/ProductDetailsSection';
// styles
import styles from './Size.module.scss';

export interface SizeProps {
  id?: number;
  name: string;
  quantity?: number;
  active?: boolean;
  disabled?: boolean;
  additionalClassName?: string;
  onSizeClick?: (size: SelectedSizeProps) => void;
}

export default function Size({ id, name, active, disabled, onSizeClick, quantity, additionalClassName }: SizeProps) {
  return (
    <button
      className={clsx(styles.size, additionalClassName, active && styles.active, disabled && styles.disabled)}
      onClick={() => onSizeClick?.({ id, name, quantity })}
    >
      {name}
    </button>
  );
}
