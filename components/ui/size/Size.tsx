import React from 'react';
import clsx from 'clsx';
import styles from './size.module.scss';

export interface SizeProps {
  value: string;
  text: string;
  active?: boolean;
  className?: string;
  //   onSizeChange?: (size: number) => void;
  onSizeClick?: (size: string) => void;
}

export const Size: React.FC<SizeProps> = ({ value, text, className, active, onSizeClick }) => {
  return (
    <button
      className={clsx(className ? className : '', styles.size, active ? styles.active : '')}
      onClick={() => onSizeClick(value)}>
      {text}
    </button>
  );
};
