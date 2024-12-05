import styles from './CartDrawerItem.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

type CartItemProps = {
  id: number;
  img: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
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
  price,
  className,
}: CartDrawerItemProps) {
  console.log(id);
  return (
    <div className={clsx(styles.item, className)}>
      <div className={styles['item-img']}>
        <Image fill src={img} alt="product image" />
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>{name}</p>
        <p className={styles['item-size']}>
          Size:
          <span> {size}</span>
        </p>
        <p className={styles['item-quantity']}>
          Quantity:
          <span> {quantity}</span>
        </p>
        <span className={styles['item-price']}>${price}</span>
      </div>
    </div>
  );
}
