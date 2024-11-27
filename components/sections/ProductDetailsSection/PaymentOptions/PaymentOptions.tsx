import styles from './PaymentOptions.module.scss';
import Image from 'next/image';

export default function PaymentOptions() {
  return (
    <div className={styles.guarantee}>
      <div className={styles['guarantee-image']}>
        <Image
          src="/img/product-page/trustbag.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
        />
      </div>

      <p>Guarantee safe & secure checkout</p>
    </div>
  );
}
