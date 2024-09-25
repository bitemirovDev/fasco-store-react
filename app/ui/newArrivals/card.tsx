import styles from '@/app/style/modules/_card.module.scss';
import { CardProps } from '@/app/interfaces';
import Image from 'next/image';

export default function Card({ product }: CardProps) {
  const { title, img, price } = product;
  return (
    <div className={styles.card}>
      <div className={styles['card-image']}>
        <Image fill src={`/img/products/${img}`} alt={title} />
      </div>
      <div className={styles['card-desc']}>
        <h5 className={styles['card-title']}>{title}</h5>
      </div>
      <div className={styles['card-reviews']}>
        <span>(4.1k)</span>
        <div className={styles['card-rating']}></div>
      </div>
      <div className={styles['card-price']}>
        <span>{price}</span>
        <span className={styles['card-status']}>Almost Sold Out</span>
      </div>
    </div>
  );
}
