import React from 'react';
// components
import { Size } from '@/components/shared';
// styles
import styles from './SizeGroup.module.scss';

interface SizeGroupProps {
  sizes: string[];
  selected?: Set<string>;
  onClickSize?: (name: string) => void;
}

export default function SizeGroup({ sizes, selected, onClickSize }: SizeGroupProps) {
  return (
    <div className={styles.sizeGroup}>
      <h5>Sizes</h5>
      <div className={styles.list}>
        {sizes.map((item, index) => (
          <Size mode="multiple" key={index} name={item} active={selected.has(item)} onClickSize={onClickSize} />
        ))}
      </div>
    </div>
  );
}
