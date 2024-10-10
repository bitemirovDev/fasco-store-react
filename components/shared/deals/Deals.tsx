'use client';
import React, { useEffect, useState } from 'react';
import DealsCarousel from './carousel/DealsCarousel';
import DealsTimer from './timer/DealsTimer';
import { Button } from '@/components/ui/button';
import styles from './deals.module.scss';

interface DealsProps {
  title: string;
  description: string;
}

export default function Deals({ title, description }: DealsProps) {
  const [dealsProducts, setDealsProducts] = useState([]);
  const endDate = new Date('2024-10-15Z15:30');

  const [isLoading, setIsLoading] = useState(true);

  // Функция для запроса данных с фильтрацией по категории
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products/deals`);

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        setDealsProducts(data);
        setIsLoading(!isLoading);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.deals} id="deals">
      <div className="container-right d-flex">
        <div className={styles.left}>
          <div className={styles.text}>
            <h3 className={`${styles.title} headline-2`}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <div className={styles.btn}>
              <Button className="btn--medium">Buy Now</Button>
            </div>
          </div>
          <DealsTimer title="Hurry, Before It’s Too Late!" endDate={endDate} />
        </div>

        <div className={`${styles.right} deals-swiper`}>
          {!isLoading && <DealsCarousel data={dealsProducts} parentClass={styles.deals} />}
        </div>
      </div>
    </section>
  );
}
