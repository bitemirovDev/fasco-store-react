import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

// icons & images
import CartIcon from '@/public/img/icons/cart.svg';
import SVGIcon from '@/components/ui/SVGIcon';

import styles from './CartButton.module.scss';

interface CartButtonProps {
  additionalclassName?: string;
  count: number;
}

export default function CartButton({ additionalclassName, count }: CartButtonProps) {
  return (
    <Link href={'/cart'}>
      <button className={clsx(additionalclassName, styles.button)}>
        <SVGIcon width={20} height={20} icon={CartIcon} fill="#8a8a8a" />
        {count > 0 && <span className={styles.counter}>{count}</span>}
      </button>
    </Link>
  );
}
