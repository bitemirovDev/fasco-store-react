import styles from '@/app/style/modules/_new-arrivals.module.scss';
import { Button } from '../button';
import ArrivalsList from './list';
import ArrivalsNav from './nav';
import products from '@/data/products.json';

export default function NewArrivals() {
  const newArrivalsProducts = products.filter((item) => item.newArrivals);

  return (
    <section className={styles.arrivals}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} headline-2`}>New Arrivals</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
        </div>
        <ArrivalsNav />
        <ArrivalsList products={newArrivalsProducts} />
        <div className={styles.btn}>
          <Button className="btn--medium">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
