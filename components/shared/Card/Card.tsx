import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import StarRating from '@/components/ui/StarRating/StarRating';
import clsx from 'clsx';

import { ProductWithRelations } from '@/types/product';

export interface CardProps {
  product: ProductWithRelations;
  height?: string;
}

export const Card: React.FC<CardProps> = ({ product, height }) => {
  const { id, name, img, price, stock, rating } = product;

  return (
    <div className={styles.card}>
      <div className={clsx(styles.image)} style={{ height: height }}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          src={`/img/products/${img.main}`}
          alt={name}
          priority
        />
      </div>

      <div className={styles.info}>
        <span className={styles.title}>{name}</span>
        <div className={styles.reviews}>
          <span>(4.1k) Customer reviews</span>
          <div className={styles.rating}>
            <StarRating rating={rating} />
          </div>
        </div>
        <div className={styles.price}>
          <span>${price.toFixed(2)}</span>
          {stock < 10 && stock > 0 && <span className={styles.status}>Almost Sold Out</span>}
          {stock === 0 && <span className={styles.status}>Sold Out</span>}
        </div>
        <Link href={`/product/${id}`} className={styles.link}></Link>
      </div>
    </div>
  );
};
