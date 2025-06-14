import styles from './CartTableRow.module.scss';
import Image from 'next/image';
import useCartStore from '@/store/useCartStore';
import { CartItemState } from '@/types/cart';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';
import QuantityCounter from '../QuantityCounter/QuantityCounter';

export default function CartTableRow({ item }: { item: CartItemState }) {
  const { updateItemQuantity, removeItemFromCart } = useCartStore();

  return (
    <tr className={styles.row}>
      <td className={styles.product}>
        <div className={styles['product-image']}>
          <Image fill src={`/img/products/${item.img}`} alt={item.img} className={styles.image} />
        </div>
        <div className={styles.description}>
          <h4 className={styles.name}>{item.name}</h4>
          <p className={styles.size}>Size: {item.size.name}</p>
          <button onClick={() => removeItemFromCart(item.id)} className={styles.remove}>
            Remove
          </button>
        </div>
      </td>
      <td className={styles.price}>${formatToTwoDecimal(item.price)}</td>
      <td className={styles.quantity}>
        <QuantityCounter
          cartItemId={item.id}
          size="md"
          selectedQuantity={item.quantity}
          onQuantityChange={updateItemQuantity}
        />
      </td>
      <td className={styles.total}>${formatToTwoDecimal(item.totalAmount)}</td>
    </tr>
  );
}
