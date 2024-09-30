import React from 'react';
import { Title } from '@/app/interfaces';
import products from '@/data/products.json';
import DealsCarousel from './carousel/DealsCarousel';
import DealsTimer from './timer/DealsTimer';
import { Button } from '../../../../components/ui/button';

import styles from './deals.module.scss';

export default function Deals({ title, description }: Title) {
  const endDate = new Date('2024-10-01Z15:30');
  const dealsProducts = products.filter((item) => item.tags.discount);

  return (
    <section className={styles.deals} id="deals">
      <div className={`container-right d-flex`}>
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
          <DealsCarousel data={dealsProducts} parentClass={styles.deals} />
        </div>
      </div>
    </section>
  );
}
