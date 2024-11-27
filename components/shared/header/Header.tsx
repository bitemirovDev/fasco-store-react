import React from 'react';
import styles from './Header.module.scss';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
}
