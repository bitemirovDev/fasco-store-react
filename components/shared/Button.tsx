import clsx from 'clsx';
import SVGIcon from '../ui/SVGIcon';

// icons
import Arrow from '@/public/img/icons/arrow_left.svg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

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

export function HeaderNavButton({ className, src, ...rest }) {
  return (
    <button {...rest} className={className}>
      <SVGIcon width={20} height={20} icon={src} fill="#8a8a8a" />
    </button>
  );
}

export function ProfileDropdownButton({
  classNameForIcon,
  classNameForButton,
  widthForIcon,
  heightForIcon,
  text,
  fillForIcon,
  icon,
  ...rest
}: ProfileDropdownButtonProps) {
  return (
    <button {...rest} className={classNameForButton}>
      <SVGIcon
        width={widthForIcon}
        height={heightForIcon}
        icon={icon}
        fill={fillForIcon}
        className={classNameForIcon}
      />
      {text}
    </button>
  );
}

interface ProfileDropdownButtonProps {
  classNameForIcon?: string;
  classNameForButton?: string;
  text?: string;
  fillForIcon?: string;
  widthForIcon?: string;
  heightForIcon?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
}
