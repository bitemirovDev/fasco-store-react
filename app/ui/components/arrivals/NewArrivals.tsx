import { Button } from '../../button';
import NewArrivalsList from './list/NewArrivalsList';
import NewArrivalsNav from './nav/NewArrivalsNav';
import products from '@/data/products.json';

import styles from './new-arrivals.module.scss';

export default function NewArrivals() {
  const newArrivalsProducts = products.filter((item) => item.newArrivals);

  return (
    <section className={styles.arrivals} id="new-arrivals">
      <div className={`container d-flex ai-c fd-c`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} headline-2`}>New Arrivals</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
            sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
        </div>
        <NewArrivalsNav />
        <NewArrivalsList products={newArrivalsProducts} />
        <div className={styles.btn}>
          <Button className="btn--medium">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
