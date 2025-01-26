'use client';
import React, { useState, useEffect } from 'react';
import { Api } from '@/services/api-client';
// components
import { Card } from '@/components/shared';
// styles
import styles from './FashionProducts.module.scss';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.products.getAll().then((products) => setProducts(products));
  }, []);

  return (
    <div className={styles.products}>
      {products.slice(0, 9).map((item) => (
        <Card product={item} key={item.id} height="300px" />
      ))}
    </div>
  );
}
