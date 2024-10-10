'use client';
import styles from './filters.module.scss';
import Sizes from '@/components/ui/sizes/Sizes';
import Prices from './price/Price';
import Brands from './brands/Brands';
import Gender from './gender/Gender';

export default function Filters() {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Filters</h4>
      <Gender />
      <Sizes />
      <Prices />
      <Brands />
    </div>
  );
}
