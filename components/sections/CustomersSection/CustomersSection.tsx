'use client';
import React, { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';
import { CustomerReview } from '@prisma/client';
// components
import CustomersCarousel from './CustomersCarousel/CustomersCarousel';
import Container from '@/components/shared/Container';
// styles
import styles from './CustomersSection.module.scss';

export default function CustomersSection() {
  const [customersReviews, setCustomersReviews] = useState<CustomerReview[] | []>([]);

  useEffect(() => {
    Api.customersReviews.getAll().then((data) => {
      setCustomersReviews(data);
    });
  }, []);

  return (
    <section className={styles.customers}>
      <Container>
        <div className={styles.head}>
          <h2 className={`${styles.title} headline-2`}>This Is What Our Customers Say</h2>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
          </p>
        </div>

        {customersReviews.length !== 0 && (
          <div className="customers-swiper">
            <CustomersCarousel data={customersReviews} parentClass={styles.customers} />
          </div>
        )}
      </Container>
    </section>
  );
}
