import React from 'react';
import CustomersCarousel from './carousel/CustomersCarousel';
import customers from '@/data/customers.json';

import styles from './customers.module.scss';

export default function Customers() {
  return (
    <section className={styles.customers}>
      <div className="container">
        <div className={styles.head}>
          <h2 className={`${styles.title} headline-2`}>This Is What Our Customers Say</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
          </p>
        </div>
        <div className="customers-swiper">
          <CustomersCarousel data={customers} parentClass={styles.customers} />
        </div>
      </div>
    </section>
  );
}
