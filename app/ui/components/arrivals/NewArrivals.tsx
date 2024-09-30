'use client';
import { Button } from '../../../../components/ui/button';
import NewArrivalsList from './list/NewArrivalsList';
import NewArrivalsNav from './nav/NewArrivalsNav';
import products from '@/data/products.json';

import styles from './new-arrivals.module.scss';
import { useState } from 'react';

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);

  const newArrivalsProducts = products
    .filter((item) => item.tags.newArrivals)
    .filter((item) => {
      if (!selectedCategory) return true;
      if (selectedCategory === 1) return item.categoryId === 1;
      if (selectedCategory === 2) return item.categoryId === 2;
      if (selectedCategory === 3) return item.categoryId === 3;
      if (selectedCategory === 4) return item.categoryId === 4;
      if (selectedCategory === 5) return item.tags.discount;
      return true;
    });

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
        <NewArrivalsList products={newArrivalsProducts} />
        <div className={styles.btn}>
          <Button className="btn--medium">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
