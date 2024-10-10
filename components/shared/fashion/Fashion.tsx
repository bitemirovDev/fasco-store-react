import React from 'react';
import styles from './fashion.module.scss';

import PageTitle from '@/components/ui/pageTitle/PageTitle';
import Filters from './filters/Filters';
import Pagination from './pagination/Pagination';
import Products from './products/Products';

export default function Fashion() {
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
