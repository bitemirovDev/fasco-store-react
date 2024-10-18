import React from 'react';
import styles from './collections.module.scss';

export default function Collections() {
  return (
    <div className={styles.collections}>
      <h5>Collections</h5>
      <ul>
        <li>
          <input type="checkbox" id="new-arrivals" />
          <label htmlFor="new-arrivals">New Arrivals</label>
        </li>
        <li>
          <input type="checkbox" id="deals" />
          <label htmlFor="deals">Deals of the month</label>
        </li>
        <li>
          <input type="checkbox" id="discount" />
          <label htmlFor="discount">Discount</label>
        </li>
        <li>
          <input type="checkbox" id="all" />
          <label htmlFor="all">View All</label>
        </li>
      </ul>
    </div>
  );
}
