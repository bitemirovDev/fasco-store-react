import React from 'react';
import clsx from 'clsx';
import styles from './Size.module.scss';

export interface SizeProps {
  value: string;
  text: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  onSizeClick?: (size: string) => void;
}

export const Size: React.FC<SizeProps> = ({
  value,
  text,
  className,
  active,
  disabled,
  onSizeClick,
}) => {
  return (
    <button
      className={clsx(
        className ? className : '',
        styles.size,
        active ? styles.active : '',
        disabled && styles.disabled,
      )}
      onClick={() => onSizeClick?.(value)}>
      {text}
    </button>
  );
};
