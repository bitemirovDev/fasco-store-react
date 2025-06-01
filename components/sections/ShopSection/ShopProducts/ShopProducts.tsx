'use client';
import React from 'react';
import type { ProductCardData } from '@/types/product';
// components
import { Card } from '@/components/shared';
// styles
import styles from './ShopProducts.module.scss';

import { Skeleton } from '@mui/material';

interface ShopSectionProps {
  items: ProductCardData[];
  loading: boolean;
  productsPerPage: number;
}

export default function ShopSection({ items, loading, productsPerPage }: ShopSectionProps) {
  const skeletons = Array.from({ length: productsPerPage }, (_, index) => (
    <Skeleton key={index} width="100%" height="100%" sx={{ transform: 'none' }} animation="wave" />
  ));

  if (!loading && items.length === 0)
    return (
      <div className="text-center flex items-center justify-center w-full h-full min-h-dvh">
        <p>No products found</p>
      </div>
    );

  return (
    <div className={styles.products}>
      {loading && skeletons}
      {!loading && items.map((item) => <Card product={item} key={item.id} />)}
    </div>
  );
}
