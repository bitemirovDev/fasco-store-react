'use client';
import React, { useEffect, useState } from 'react';
import DealsCarousel from './DealsCarousel/DealsCarousel';
import DealsTimer from './DealsTimer/DealsTimer';
import { Button } from '@/components/ui/Button';
import { Api } from '@/services/api-client';
import styles from './DealsSection.module.scss';
import { Skeleton } from '@mui/material';

interface DealsProps {
  title: string;
  description: string;
}

export default function DealsSection({ title, description }: DealsProps) {
  const [dealsProducts, setDealsProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endTime = 259200 * 1000; // 3 days

  useEffect(() => {
    Api.products.deals().then((data) => {
      setDealsProducts(data);
      setIsLoading(false);
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
              <Button className="btn--medium btn--primary">Buy Now</Button>
            </div>
          </div>
          <DealsTimer title="Hurry, Before It’s Too Late!" endTime={endTime} />
        </div>

        <div className={`${styles.right} deals-swiper`}>
          {isLoading && <Skeleton width={'100%'} height={'100%'} sx={{ transform: 'none' }} />}
          {!isLoading && (
            <DealsCarousel data={dealsProducts} parentClass={styles.deals} loading={isLoading} />
          )}
        </div>
      </div>
    </section>
  );
}
