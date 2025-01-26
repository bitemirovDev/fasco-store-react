import React from 'react';
// components
import { Skeleton } from '@mui/material';
import { Card } from '@/components/shared/index';
// types
import { ProductWithRelations } from '@/types/product';
// styles
import styles from './NewArrivalsList.module.scss';

type ProductsProps = {
  products: ProductWithRelations[];
  loading?: boolean;
};

export default function NewArrivalsList({ products, loading }: ProductsProps) {
  if (loading) {
    return (
      <div className={styles.list}>
        {...Array(6)
          .fill(0)
          .map((item, index) => (
            <div key={index} style={{ padding: '15px' }}>
              <Skeleton
                height={400}
                width={'100%'}
                sx={{ transform: 'none', marginBottom: '12px' }}
                animation="wave"
              />
              <Skeleton
                height={40}
                width={'100%'}
                sx={{ transform: 'none', marginBottom: '10px' }}
                animation="wave"
              />
              <Skeleton
                height={29}
                width={'100%'}
                sx={{ transform: 'none', marginBottom: '10px' }}
                animation="wave"
              />
              <Skeleton height={20} width={'100%'} sx={{ transform: 'none' }} animation="wave" />
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className={styles.list}>
      {products.map((item) => (
        <Card key={item.id} product={item} height="400px" />
      ))}
    </div>
  );
}
