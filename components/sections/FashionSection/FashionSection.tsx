import React from 'react';
import styles from './FashionSection.module.scss';

import PageTitle from '@/components/ui/PageTitle/PageTitle';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import Products from './FashionProducts/FashionProducts';

export default function FashionSection() {
  return (
    <section className={styles.fashion}>
      <div className="container">
        <PageTitle title="Fashion" />
        <div className={styles.content}>
          <Filters />
          <Products />
        </div>
        <Pagination />
      </div>
    </section>
  );
}
