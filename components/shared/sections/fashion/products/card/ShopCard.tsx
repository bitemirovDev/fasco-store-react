import styles from './shop-card.module.scss';
import Image from 'next/image';
import { Product } from '@/app/interfaces';
import StarRating from '@/components/ui/starRating/StarRating';

interface CardProps {
  product: Product;
}

export default function ShopCard({ product }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={`/img/products/${product.img}`}
          alt="name"
          width={274}
          height={360}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <StarRating rating={product.rating} className={styles.rating} />
      </div>

      {product.stock === 0 && (
        <span className={styles.soldout}>
          Sold <br />
          out
        </span>
      )}

      <a href="#!" className={styles.link}></a>
    </div>
  );
}
