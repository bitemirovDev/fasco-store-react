import styles from './shop-card.module.scss';
import Image from 'next/image';

import { Product } from '@/app/interfaces';

interface CardProps {
  product: Product;
}

export default function ShopCard({ product }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={`/img/products/${product.img}`} alt="name" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
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
