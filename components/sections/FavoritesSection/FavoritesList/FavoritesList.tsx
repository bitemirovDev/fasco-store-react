'use client';
import styles from './FavoritesList.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

import HeartCrackIcon from '@/public/img/icons/heart-crack-solid.svg';
import { SVGIcon } from '@/components/ui';
import { Button } from '@/components/ui';
import useFavoritesStore from '@/store/useFavoritesStore';
import { formatToTwoDecimal } from '@/utils';

import useCartStore from '@/store/useCartStore';
import { Toaster } from 'react-hot-toast';
import { successNotify, errorNotify } from '@/lib/notifications';
import { CartItemState } from '@/types/cart';
import Link from 'next/link';

export default function FavoritesList() {
  const { items, removeItemFromFavorites } = useFavoritesStore();
  const { addItemToCart } = useCartStore();

  const handleAddToCart = (item: CartItemState) => {
    const result = addItemToCart(item);

    if (result.success) {
      successNotify(result.success);
    } else {
      errorNotify(result.error);
    }
  };

  const handleRemoveFromFavorites = (id: string) => {
    const result = removeItemFromFavorites(id);
    if (result.success) {
      successNotify(result.success);
    } else {
      errorNotify(result.error);
    }
  };

  return (
    <>
      <ul className={clsx(styles.list, items.length === 0 && styles['list-empty'])}>
        {items &&
          items.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles['item-image']}>
                <Image
                  src={`/img/products/${item.img}`}
                  sizes="(max-width: 768px) 100vw"
                  alt="product image"
                  width={100}
                  height={100}
                />
              </div>

              <div className="flex flex-col justify-between">
                <div className={styles['item-details']}>
                  <Link className={styles['item-title']} href={`/product/${item.productId}`}>
                    {item.name}
                  </Link>
                  <span className={styles['item-size']}>Size: {item.size.name}</span>
                  <span className={styles['item-price']}>${formatToTwoDecimal(item.price)}</span>
                </div>

                <div className={styles['item-actions']}>
                  <Button className="btn--primary btn--sm" onClick={() => handleAddToCart(item)}>
                    Add to cart
                  </Button>
                  <button className={styles['item-remove']} onClick={() => handleRemoveFromFavorites(item.id)}>
                    <SVGIcon icon={HeartCrackIcon} width={'100%'} height={'100%'} fill="#8a8a8a" />
                  </button>
                </div>
              </div>
            </li>
          ))}

        {items.length === 0 && <p className={styles.empty}>No favorites yet</p>}
      </ul>

      <Toaster />
    </>
  );
}
