'use client';
import React from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';
// styles
import styles from './HeaderNav.module.scss';

interface HeaderNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function HeaderNav({ currentPage, onPageChange }: HeaderNavProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={`${styles['list-item']} ${currentPage === '/' ? styles.active : ''}`}>
          <Link href="/" onClick={() => onPageChange('/')}>
            Home
          </Link>
        </li>
        <li className={styles['list-item']}>
          <LinkScroll to="deals" smooth={true} duration={500}>
            Deals
          </LinkScroll>
        </li>
        <li className={styles['list-item']}>
          <LinkScroll to="new-arrivals" smooth={true} duration={500}>
            New Arrivals
          </LinkScroll>
        </li>
        <li className={`${styles['list-item']} ${currentPage === '/shop' ? styles.active : ''}`}>
          <Link href="/shop" onClick={() => onPageChange('/shop')}>
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
