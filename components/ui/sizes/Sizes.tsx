'use client';

import styles from './sizes.module.scss';
import { useState, useEffect } from 'react';

export default function Sizes() {
  const [sizes, setSizes] = useState([]);
  const [activeSizes, setActiveSizes] = useState([]);

  const handleSizes = (sizeId: number) => {
    if (activeSizes.includes(sizeId)) {
      setActiveSizes(activeSizes.filter((item) => item !== sizeId));
    } else {
      setActiveSizes([...activeSizes, sizeId]);
    }
  };

  useEffect(() => {
    fetch('/api/sizes')
      .then((res) => res.json())
      .then((data) => {
        setSizes(data);
      });
  }, []);

  return (
    <div className={styles.sizes}>
      <h5>Size</h5>
      <ul>
        {sizes.map((item, index) => (
          <li
            key={index}
            className={activeSizes.includes(item.id) ? styles.active : ''}
            onClick={() => handleSizes(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
