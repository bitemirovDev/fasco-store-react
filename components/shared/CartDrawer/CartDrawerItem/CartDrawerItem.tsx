import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import useCartDrawer from '@/store/useCartDrawer';
import QuantityCounter from '../../QuantityCounter/QuantityCounter';

// icons & images
import { SVGIcon } from '@/components/ui';
import TrashIcon from '@/public/img/icons/trash.svg';
// styles
import styles from './CartDrawerItem.module.scss';

type CartItemProps = {
  id?: number;
  img: string;
  name: string;
  size: string;
  quantity: number;
  total: string;
};

type CartDrawerItemProps = CartItemProps & {
  className?: string;
};

export default function CartDrawerItem({
  id,
  img,
  name,
  size,
  quantity,
  total,
  className,
}: CartDrawerItemProps) {
  const { removeCartItem } = useCartDrawer();

  return (
    <div className={clsx(styles.item, className)}>
      <div className={styles['item-img']}>
        <Image fill src={img} alt="product image" sizes="(max-width: 768px) 100vw" />
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>{name}</p>
        <p className={styles['item-size']}>
          Size:
          <span> {size}</span>
        </p>
        {/* <p className={styles['item-quantity']}>
          Quantity:
          <span> {quantity}</span>
        </p> */}

        <div className={styles['item-quantity']}>
          <QuantityCounter maxQuantity={5} size={'md'} />
        </div>

        <span className={styles['item-total']}>${total}</span>
      </div>
      <button className={styles['item-remove']} onClick={() => removeCartItem(id)}>
        <SVGIcon icon={TrashIcon} width={'100%'} height={'100%'} fill="#8a8a8a" />
      </button>
    </div>
  );
}
