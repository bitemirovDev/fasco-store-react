'use client';
import styles from './products.module.scss';
import ShopCard from './card/ShopCard';
import { useState, useEffect } from 'react';

const limit = 9;

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.products}>
      {products.slice(0, limit).map((item) => (
        <ShopCard product={item} key={item.id} />
      ))}
    </div>
  );
}
