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
          alt={`${item.title}`}
        />
      </div>
      <div className={`${styles.text} deals-card__text`}>
        <div className={styles.title}>
          0{index + 1} - {item.tags.discount.title}
        </div>
        <div className={styles.discount}>{item.tags.discount.percent}</div>
      </div>
    </article>
  );
}
