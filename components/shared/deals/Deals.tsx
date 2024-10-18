'use client';
import React, { useEffect, useState } from 'react';
import DealsCarousel from './carousel/DealsCarousel';
import DealsTimer from './timer/DealsTimer';
import { Button } from '@/components/ui/button';
import { Api } from '@/services/api-client';
import styles from './deals.module.scss';

interface DealsProps {
  title: string;
  description: string;
}

export default function Deals({ title, description }: DealsProps) {
  const [dealsProducts, setDealsProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const endDate = new Date('2024-10-30Z15:30');

  useEffect(() => {
    Api.products.deals().then((data) => {
      setDealsProducts(data);
      setIsLoading(!isLoading);
    });
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
          {isLoading && <p>Loading...</p>}
          {!isLoading && <DealsCarousel data={dealsProducts} parentClass={styles.deals} />}
        </div>
      </div>
    </section>
  );
}
