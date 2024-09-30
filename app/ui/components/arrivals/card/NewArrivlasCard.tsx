import styles from './new-arrivals-card.module.scss';
import { CardProps } from '@/app/interfaces';
import Image from 'next/legacy/image';
import Link from 'next/link';
import StarRating from '../../../../../components/ui/starRating/StarRating';

export default function NewArrivalsCard({ product }: CardProps) {
  const { title, img, price } = product;
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          layout="fill"
          width={0}
          height={0}
          objectFit="contain"
          src={`/img/products/${img}`}
          alt={title}
        />
      </div>
      <div className={styles.desc}>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <div className={styles.reviews}>
        <span>(4.1k) Customer reviews</span>
        <div className={styles.rating}>
          <StarRating rating={product.rating} />
        </div>
      </div>
      <div className={styles.price}>
        <span>{price}</span>
        {product.stock < 10 && <span className={styles.status}>Almost Sold Out</span>}
      </div>

      <Link href={'#!'} className={styles.link}></Link>
    </div>
  );
}
