import React from 'react';
// components
import { Skeleton } from '@mui/material';
import { SizeProps } from '@/components/shared/Size/Size';
import { Size } from '@/components/shared';
// styles
import styles from './SizeGroup.module.scss';

type Item = SizeProps;

interface SizeGroupProps {
  items: Item[];
  loading?: boolean;
  selected?: Set<string>;
  onClickSize?: (id: string) => void;
}

export default function SizeGroup({ items, loading, selected, onClickSize }: SizeGroupProps) {
  if (loading) {
    return (
      <div className={styles.sizeGroup}>
        <h5>Sizes</h5>
        <div className={styles.list}>
          {...Array(6)
            .fill(0)
            .map((item, index) => (
              <Skeleton key={index} sx={{ transform: 'none', height: '42px', width: '42px' }} />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.sizeGroup}>
      <h5>Sizes</h5>
      <div className={styles.list}>
        {items.map((item) => (
          <Size
            key={item.value}
            value={item.value}
            text={item.text}
            active={selected.has(item.value)}
            onSizeClick={() => onClickSize?.(item.value)}
          />
        ))}
      </div>
    </div>
  );
}
