import React from 'react';
import { Button } from '@/components/ui/button';
import styles from './sale.module.scss';
import Link from 'next/link';

export default function Sale() {
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
              <Button className="btn--medium">
                <Link href={'#!'}>Shop now</Link>
              </Button>
            </div>
          </div>
          <div className={styles['grid-item']}></div>
          <div className={styles['grid-item']}></div>
        </div>
      </div>
    </section>
  );
}
