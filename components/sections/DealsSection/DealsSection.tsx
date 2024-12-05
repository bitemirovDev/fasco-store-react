'use client';
import React, { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';

// types
import { ProductWithRelations } from '@/types/product';

// components
import DealsCarousel from './DealsCarousel/DealsCarousel';
import DealsTimer from './DealsTimer/DealsTimer';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@mui/material';
import Container from '@/components/shared/Container';

// styles
import styles from './DealsSection.module.scss';

type DealsSectionProps = {
  title: string;
  description: string;
};

export default function DealsSection({ title, description }: DealsSectionProps) {
  const [dealsProducts, setDealsProducts] = useState<ProductWithRelations[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const endTime = 259200000; // 3 days

  useEffect(() => {
    Api.products.deals().then((data) => {
      setDealsProducts(data);
      setIsLoading(false);
    });
  }, []);

  const content = isLoading ? (
    <Skeleton sx={{ transform: 'none', width: '100%', height: '100%' }} />
  ) : (
    <DealsCarousel data={dealsProducts} parentClass={styles.deals} />
  );

  return (
    <section className={styles.deals} id="deals">
      <Container classNames="container-right d-flex">
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

        <div className={`${styles.right} deals-swiper`}>{content}</div>
      </Container>
    </section>
  );
}
