import React from 'react';

// styles
import styles from './FashionSection.module.scss';

// components
import { PageTitle } from '@/components/shared';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import FashionProducts from './FashionProducts/FashionProducts';

export default function FashionSection() {
  return (
    <section className={styles.fashion}>
      <div className="container">
        <PageTitle title="Fashion" />
        <div className={styles.content}>
          <Filters />
          <FashionProducts />
        </div>
        <Pagination />
      </div>
    </section>
  );
}
