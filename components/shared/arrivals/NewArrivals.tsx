'use client';
import { Button } from '@/components/ui/button';
import NewArrivalsList from './list/NewArrivalsList';
import NewArrivalsNav from './nav/NewArrivalsNav';
// import products from '@/data/products.json';
import styles from './new-arrivals.module.scss';
import { useEffect, useState } from 'react';

export default function NewArrivals() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const [newArrivalsProducts, setNewArrivalsProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // Функция для запроса данных с фильтрацией по категории
  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      try {
        let url = '/api/products';

        if (selectedCategory === 5) {
          url += '/deals';
        } else {
          const categoryQuery = selectedCategory ? `?categoryId=${selectedCategory}` : '';
          url += `/new-arrivals${categoryQuery}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        setNewArrivalsProducts(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, [selectedCategory]); // Запрос обновляется при изменении категории

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
          <Button className="btn--medium">Veiw more</Button>
        </div>
      </div>
    </section>
  );
}
