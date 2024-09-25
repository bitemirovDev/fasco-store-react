import Card from './card';
import { ProductsProps } from '@/app/interfaces';
import styles from '@/app/style/modules/_list.module.scss';

export default function ArrivalsList({ products }: ProductsProps) {
  return (
    <div className={styles.list}>
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
}
