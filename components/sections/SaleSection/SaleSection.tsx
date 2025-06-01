import React from 'react';
import { Button } from '@/components/shared/Button';
import styles from './SaleSection.module.scss';
import Link from 'next/link';

export default function SaleSection() {
  return (
    <section className={styles.sale}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles['grid-item']}></div>
          <div className={styles['grid-item']}></div>
          <div className={styles['grid-item']}>
            <div className={styles.text}>
              <p className={styles['text-ultimate']}>ULTIMATE</p>
              <p className={styles['text-sale']}>SALE</p>
              <p className={styles['text-collection']}>New collection</p>
            </div>

            <div className={styles.btn}>
              <Link href="/shop">
                <Button className="btn--md btn--primary">Shop now</Button>
              </Link>
            </div>
          </div>
          <div className={styles['grid-item']}></div>
          <div className={styles['grid-item']}></div>
        </div>
      </div>
    </section>
  );
}
