'use client';

import React from 'react';
import clsx from 'clsx';
// components
import { Breadcrumbs, Container } from '@/components/shared';
// styles
import styles from './CartSection.module.scss';
import CartTableSummary from '@/components/shared/CartTableSummary/CartTableSummary';
import CartTable from '@/components/shared/CartTable/CartTable';
import CartTableEmpty from '@/components/shared/CartTableEmpty/CartTableEmpty';

import useCartStore from '@/store/useCartStore';

export default function CartSection() {
  const { items } = useCartStore();
  return (
    <section className={styles['shopping-cart']}>
      <Container>
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
