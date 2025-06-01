import styles from './CheckoutProductItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CartItemState } from '@/types/cart';
import { formatToTwoDecimal } from '@/utils';

interface CheckoutProductItemProps {
  item: CartItemState;
}

export default function CheckoutProductItem({ item }: CheckoutProductItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles['item-image']}>
        <Image width={100} height={100} src={`/img/products/${item.img}`} alt="product image" />
        <span className={styles['item-quantity']}>{item.quantity}</span>
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>{item.name}</p>
        <span className={styles['item-size']}>Size: {item.size.name}</span>
        <span className={styles['item-price']}>${formatToTwoDecimal(item.totalAmount)}</span>
      </div>

      <Link className={styles['item-link']} href={`/product/${item.productId}`} />
    </li>
  );
}
