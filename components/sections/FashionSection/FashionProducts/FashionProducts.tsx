'use client';
import styles from './FashionProducts.module.scss';
import { useState, useEffect } from 'react';
import { Card } from '@/components/shared/Card/Card';
import { Api } from '@/services/api-client';

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
