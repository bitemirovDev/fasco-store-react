'use client';

import React from 'react';
import clsx from 'clsx';
// components
import { Breadcrumbs, Container } from '@/components/shared';
// styles
import styles from './CartSection.module.scss';
import CartTableSummary from '@/components/shared/CartTableSummary/CartTableSummary';
import CartTable from '@/components/shared/CartTable/CartTable';

export default function CartSection() {
  return (
    <section className={styles['shopping-cart']}>
      <Container className="container">
        <div className={styles.header}>
          <h2 className={clsx(styles.title, 'headline-3')}>Shopping Cart</h2>
          <Breadcrumbs />
        </div>

        <CartTable />
        <CartTableSummary />
      </Container>
    </section>
  );
}
