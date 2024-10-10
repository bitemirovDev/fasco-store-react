'use client';
import React, { useState } from 'react';
import styles from './pagination.module.scss';
import Image from 'next/legacy/image';

export default function Pagination() {
  const [activePage, setActivePage] = useState('1');

  const handlePage = (page: string) => {
    setActivePage(page);
  };
  return (
    <div className={styles.pagination}>
      <ul>
        <li className={`${styles.btn} ${styles['btn-prev']}`}>
          <Image src={'/img/icons/pagination_arrow.svg'} alt="arrow" width={24} height={24} />
        </li>
        <li
          className={`${styles.number} ${activePage === '1' ? styles.active : ''}`}
          onClick={() => handlePage('1')}>
          1
        </li>
        <li
          className={`${styles.number} ${activePage === '2' ? styles.active : ''}`}
          onClick={() => handlePage('2')}>
          2
        </li>
        <li
          className={`${styles.number} ${activePage === '3' ? styles.active : ''}`}
          onClick={() => handlePage('3')}>
          3
        </li>
        <li className={`${styles.btn} ${styles['btn-next']}`}>
          <Image src={'/img/icons/pagination_arrow.svg'} alt="arrow" width={24} height={24} />
        </li>
      </ul>
    </div>
  );
}
