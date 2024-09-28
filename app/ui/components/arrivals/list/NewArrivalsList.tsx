import NewArrivalsCard from '../card/NewArrivlasCard';
import { ProductsProps } from '@/app/interfaces';
import styles from './new-arrivals-list.module.scss';

export default function NewArrivalsList({ products }: ProductsProps) {
  return (
    <div className={styles.list}>
      {products.map((item) => (
        <NewArrivalsCard key={item.id} product={item} />
      ))}
    </div>
  );
}
