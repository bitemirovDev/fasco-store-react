import { Button as ButtonProps } from '@/app/interfaces';
import clsx from 'clsx';

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={clsx('btn', className)}>
      {children}
    </button>
  );
}

export function PrevSlideButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={clsx('', className)}>
      {children}
    </button>
  );
}

export function NextSlideButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={clsx('', className)}>
      {children}
    </button>
  );
}
