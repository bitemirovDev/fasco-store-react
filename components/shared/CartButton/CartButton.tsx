import React from 'react';
import Link from 'next/link';

// icons & images
import CartIcon from '@/public/img/icons/cart.svg';
import SVGIcon from '@/components/ui/SVGIcon';

interface CartButtonProps {
  className?: string;
}

export default function CartButton({ className }: CartButtonProps) {
  return (
    <Link href={'/cart'}>
      <button className={className}>
        <SVGIcon width={20} height={20} icon={CartIcon} fill="#8a8a8a" />
      </button>
    </Link>
  );
}
