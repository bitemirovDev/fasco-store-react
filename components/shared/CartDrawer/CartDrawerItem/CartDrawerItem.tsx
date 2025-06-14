import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import useCartDrawer from '@/store/useCartStore';
import QuantityCounter from '../../QuantityCounter/QuantityCounter';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';
import type { CartItemState } from '@/types/cart';
import { Toaster } from 'react-hot-toast';
import { successNotify, errorNotify } from '@/lib/notifications';

// icons & images
import { SVGIcon } from '@/components/ui';
import TrashIcon from '@/public/img/icons/trash.svg';
// styles
import styles from './CartDrawerItem.module.scss';

type CartDraweritemProps = {
  item: CartItemState;
  className?: string;
  onQuantityChange: (id: string, type: string, quantity: number) => void;
};

export default function CartDrawerItem({ item, className, onQuantityChange }: CartDraweritemProps) {
  const { removeItemFromCart } = useCartDrawer();

  const { id, img, name, size, quantity, totalAmount } = item;

  const handleRemoveFromCart = (id: string) => {
    const result = removeItemFromCart(id);
    if (result.success) {
      successNotify(result.success);
    }
    if (result.error) {
      errorNotify(result.error);
    }
  };

  return (
    <>
      <div className={clsx(styles.item, className)}>
        <div className={styles['item-img']}>
          <Image fill src={`/img/products/${img}`} alt="product image" sizes="(max-width: 768px) 100vw" />
        </div>
        <div className={styles['item-details']}>
          <p className={styles['item-title']}>{name}</p>
          <p className={styles['item-size']}>
            Size: <span> {size.name}</span>
          </p>
          <div className={styles['item-quantity']}>
            <span>Quantity:</span>
            <QuantityCounter
              selectedQuantity={quantity}
              size={'md'}
              onQuantityChange={onQuantityChange}
              cartItemId={id}
            />
          </div>

          <span className={styles['item-total']}>${formatToTwoDecimal(totalAmount)}</span>
        </div>
        <button className={styles['item-remove']} onClick={() => handleRemoveFromCart(id)}>
          <SVGIcon icon={TrashIcon} width={'100%'} height={'100%'} fill="#8a8a8a" />
        </button>
      </div>

      <Toaster />
    </>
  );
}
