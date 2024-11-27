import styles from './DeliveryInfo.module.scss';
import Image from 'next/image';
import { formatDate } from '@/utils/format-date';

export default function DeliveryInfo() {
  const date = new Date().getTime();
  const firstDay = formatDate(date + 259200000);
  const secondDay = formatDate(date + 864000000);
  const deliveryDate = `${firstDay} - ${secondDay}`;

  return (
    <div className={styles.delivery}>
      <div className={styles['delivery-el']}>
        <Image src="/img/icons/delivery.svg" alt="estimated delivery" width={20} height={20} />
        <p>
          Estimated Delivery:
          <span>{deliveryDate}</span>
        </p>
      </div>
      <div className={styles['delivery-el']}>
        <Image src="/img/icons/shipping.svg" alt="free shipping & returns" width={20} height={20} />
        <p>
          Free Shipping & Returns:
          <span>On all orders over $75</span>
        </p>
      </div>
    </div>
  );
}
