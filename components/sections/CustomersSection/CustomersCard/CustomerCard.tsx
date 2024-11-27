import Image from 'next/image';
import { CustomerReview } from '@prisma/client';
// components
import StarRating from '@/components/ui/StarRating/StarRating';
// styles
import styles from './CustomerCard.module.scss';

export default function CustomerCard({ customer }: { customer: CustomerReview }) {
  return (
    <div className={`${styles.review} customers__review`}>
      <div className={styles.picture}>
        <Image
          fill
          sizes="100%"
          style={{ objectFit: 'cover' }}
          src={`/img/customers/${customer.avatar}`}
          alt="customer image"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{customer.review}</p>
        <div className={styles.rating}>
          <StarRating rating={customer.rating} />
        </div>
        <span className={styles.name}>{customer.name}</span>
        <span className={styles.profession}>{customer.profession}</span>
      </div>
    </div>
  );
}
