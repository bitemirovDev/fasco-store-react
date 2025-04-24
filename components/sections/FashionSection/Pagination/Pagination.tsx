'use client';
import React from 'react';
import styles from './Pagination.module.scss';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const arr = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page: number, type: 'increment' | 'decrement') => {
    if (type === 'increment' && page < totalPages) onPageChange(page + 1);
    if (type === 'decrement' && page > 1) onPageChange(page - 1);
  };

  return (
    <div className={styles.pagination}>
      <ul>
        <li
          className={`${styles.btn} ${styles['btn-prev']}`}
          onClick={() => handlePageChange(currentPage, 'decrement')}
        >
          <Image src={'/img/icons/pagination_arrow.svg'} alt="arrow" width={24} height={24} />
        </li>

        {arr.map((page) => (
          <li
            key={page}
            className={`${styles.number} ${currentPage === page ? styles.active : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        <li
          className={`${styles.btn} ${styles['btn-next']}`}
          onClick={() => handlePageChange(currentPage, 'increment')}
        >
          <Image src={'/img/icons/pagination_arrow.svg'} alt="arrow" width={24} height={24} />
        </li>
      </ul>
    </div>
  );
}
