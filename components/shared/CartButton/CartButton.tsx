import CartIcon from '@/public/img/icons/cart.svg';
import SVGIcon from '@/components/ui/SVGIcon';
import useCartDrawer from '@/store/useCartDrawer';

type CartButtonProps = {
  className?: string;
};

export default function CartButton({ className }: CartButtonProps) {
  const cartDrawer = useCartDrawer();

  return (
    <button className={className} onClick={cartDrawer.open}>
      <SVGIcon width={20} height={20} icon={CartIcon} fill="#8a8a8a" />
    </button>
  );
}
