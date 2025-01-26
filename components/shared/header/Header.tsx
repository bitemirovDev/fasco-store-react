import React from 'react';
// components
import HeaderNav from './HeaderNav/HeaderNav';
// styles
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
}
