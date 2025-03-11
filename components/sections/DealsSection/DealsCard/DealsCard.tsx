import Image from 'next/image';
import styles from './DealsCard.module.scss';
import Link from 'next/link';

import { ProductDiscount } from '@prisma/client';
import { ProductImages } from '@/types/product';

interface DealsCardProps {
  id: number;
  img: ProductImages;
  discount?: ProductDiscount;
  index?: number;
}

export default function DealsCard({ id, img, discount, index }: DealsCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={`/img/products/${img.main}`}
          alt={`${discount.name}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={`${styles.text} deals-card__text`}>
        <div className={styles.title}>
          {(index + 1).toString().padStart(2, '0')} &mdash; {discount.name}
        </div>
        <div className={styles.discount}>{discount.percent}% OFF</div>
      </div>

      <Link href={`/product/${id}`} className={styles.link}></Link>
    </article>
  );
}
