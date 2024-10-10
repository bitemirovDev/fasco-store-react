import NewArrivalsCard from '../card/NewArrivlasCard';
import { ProductsProps } from '@/app/interfaces';
import styles from './new-arrivals-list.module.scss';
import CardSkeleton from './Skeleton';

const limit = 6;

export default function NewArrivalsList({ products, loading }: ProductsProps) {
  return (
    <div className={styles.list}>
      {loading && <CardSkeleton cards={limit} />}
      {products.slice(0, limit).map((item) => (
        <NewArrivalsCard key={item.id} product={item} />
      ))}
    </div>
  );
}
