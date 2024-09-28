import { Customer } from '@/app/interfaces';
import styles from './customer-card.module.scss';
import Image from 'next/legacy/image';
import StarRating from '@/app/ui/components/starRating/StarRating';

export default function CustomerCard({ customer }: { customer: Customer }) {
  return (
    <div className={`${styles.review} customers__review`}>
      <div className={styles.picture}>
        <Image
          layout="fill"
          width={0}
          height={0}
          objectFit="cover"
          src={`/img/customers/${customer.img}`}
          alt="customer image"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{customer.review}</p>
        <div className={styles.rating}>
          <StarRating rating={customer.rating} />
        </div>
        <span className={styles.name}>{customer.customerName}</span>
        <span className={styles.profession}>{customer.profession}</span>
      </div>
    </div>
  );
}
