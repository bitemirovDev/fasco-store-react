import NewArrivalsCard from '../card/NewArrivlasCard';
import { ProductsProps } from '@/app/interfaces';
import styles from './new-arrivals-list.module.scss';

const limit = 6;

export default function NewArrivalsList({ products }: ProductsProps) {
  return (
    <div className={styles.list}>
      {products.slice(0, limit).map((item) => (
        <NewArrivalsCard key={item.id} product={item} />
      ))}
    </div>
  );
}
