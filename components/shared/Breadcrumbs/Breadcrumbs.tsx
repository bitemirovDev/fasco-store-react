import React from 'react';
import Link from 'next/link';

import styles from './Breadcrumbs.module.scss';

export default function Breadcrumbs({}) {
  return (
    <div className={styles.breadcrumbs}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
}
