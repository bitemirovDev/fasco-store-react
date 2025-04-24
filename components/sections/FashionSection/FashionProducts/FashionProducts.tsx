'use client';
import React from 'react';
import type { ProductCardData } from '@/types/product';
// components
import { Card } from '@/components/shared';
// styles
import styles from './FashionProducts.module.scss';

import { Skeleton } from '@mui/material';

interface FashionProductsProps {
  items: ProductCardData[];
  loading: boolean;
  productsPerPage: number;
}

export default function FashionProducts({ items, loading, productsPerPage }: FashionProductsProps) {
  if (items.length === 0) {
    return (
      <div className="text-center flex items-center justify-center w-full h-full min-h-dvh">
        <p>No products found</p>;
      </div>
    );
  }

  const skeletons = Array.from({ length: productsPerPage }, (_, index) => (
    <Skeleton key={index} width="100%" height="100%" sx={{ transform: 'none' }} animation="wave" />
  ));

  return (
    <div className={styles.products}>
      {loading && skeletons}
      {!loading && items.map((item) => <Card product={item} key={item.id} />)}
    </div>
  );
}
