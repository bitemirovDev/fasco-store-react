'use client';
import React, { useState } from 'react';

import { Button } from '@/components/shared/Button';
import NewArrivalsList from './NewArrivalsList/NewArrivalsList';
import NewArrivalsNav from './NewArrivalsNav/NewArrivalsNav';
import styles from './NewArrivalsSection.module.scss';
import { useNewArrivalsSectionProducts } from '@/hooks/use-new-arrivals-section-products';

export default function NewArrivalsSection() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const { items, loading } = useNewArrivalsSectionProducts();
  const displayedProducts = items[selectedCategory] || [];

  return (
    <section className={styles.arrivals} id="new-arrivals">
      <div className={`container d-flex ai-c fd-c`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} headline-2`}>New Arrivals</h2>
          <p className={styles.desc}>
            Discover the latest arrivals: stylish trends and essentials to refresh your wardrobe
          </p>
        </div>
        <NewArrivalsNav selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <NewArrivalsList products={displayedProducts} loading={loading} />
        <div className={styles.btn}>
          <Button className="btn--md btn--primary">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
