import React from 'react';
import styles from './CartTableHeader.module.scss';
import clsx from 'clsx';

export default function CartTableHeader() {
  return (
    <thead className={styles['table-header']}>
      <tr>
        <th className={clsx(styles.column, styles['column--product'])}>Product</th>
        <th className={clsx(styles.column, styles['column--price'])}>Price</th>
        <th className={clsx(styles.column, styles['column--quantity'])}>Quantity</th>
        <th className={clsx(styles.column, styles['column--total'])}>Total</th>
      </tr>
    </thead>
  );
}
