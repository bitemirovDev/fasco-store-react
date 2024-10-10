import React from 'react';
import Link from 'next/link';

import styles from './breadcrumbs.module.scss';

interface ComponentNameProps {
  // добавьте пропсы здесь
}

export const Breadcrumbs: React.FC<ComponentNameProps> = ({}) => {
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
};

export default Breadcrumbs;
