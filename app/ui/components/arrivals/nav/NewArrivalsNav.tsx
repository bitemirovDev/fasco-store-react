'use client';
import React from 'react';
import styles from './new-arrivals-nav.module.scss';
import { useState } from 'react';

export default function NewArrivalsNav() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {/* <li className={styles.item}>Men’s</li>
        <li className={`${styles.item} ${styles.active}`}>Women’s</li>
        <li className={styles.item}>Women Accessories</li>
        <li className={styles.item}>Men Accessories</li>
        <li className={styles.item}>Discount Deals</li> */}

        {['Men’s', 'Women’s', 'Women Accessories', 'Men Accessories', 'Discount Deals'].map(
          (item, index) => (
            <li
              key={index}
              className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => handleItemClick(index)}>
              {item}
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
