import { Button as ButtonProps } from '@/app/interfaces';
import clsx from 'clsx';
import SVGIcon from './svg';
import Arrow from '@/public/img/icons/arrow_left.svg';

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={clsx('btn', className)}>
      {children}
    </button>
  );
}

export function PrevSlideButton({ ...rest }) {
  return (
    <button {...rest} className="swiper-btn swiper-btn--prev">
      <SVGIcon width={9} height={16} fill="none" icon={Arrow} />
    </button>
  );
}

export function NextSlideButton({ ...rest }) {
  return (
    <button {...rest} className="swiper-btn swiper-btn--next">
      <SVGIcon width={9} height={16} fill="none" icon={Arrow} />
    </button>
  );
}
