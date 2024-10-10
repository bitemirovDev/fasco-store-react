import React from 'react';

import styles from './header.module.scss';
import HeaderNav from './nav/HeaderNav';

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
}
