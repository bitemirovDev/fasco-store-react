'use client';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';

import { Button } from '@/components/ui/button';
import NewArrivalsList from './list/NewArrivalsList';
import NewArrivalsNav from './nav/NewArrivalsNav';
import styles from './new-arrivals.module.scss';

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Api.products.newArrivals(selectedCategory).then((data) => {
      setNewArrivalsProducts(data);
      setIsLoading(false);
    });
  }, [selectedCategory]);

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
        <NewArrivalsNav
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <NewArrivalsList products={newArrivalsProducts} loading={isLoading} />
        <div className={styles.btn}>
          <Button className="btn--medium btn--primary">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
