import Image from 'next/legacy/image';
import styles from './deals-card.module.scss';

export default function DealsCard({ item, index }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image
          width={0}
          height={0}
          layout="fill"
          objectFit="cover"
          src={`/img/products/${item.img}`}
          alt={`${item.name}`}
        />
      </div>
      <div className={`${styles.text} deals-card__text`}>
        <div className={styles.title}>
          {(index + 1).toString().padStart(2, '0')} &mdash; {item.sale.name}
        </div>
        <div className={styles.discount}>{item.sale.percent}% OFF</div>
      </div>
    </article>
  );
}
