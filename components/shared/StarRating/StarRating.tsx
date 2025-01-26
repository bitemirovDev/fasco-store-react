import React from 'react';
import clsx from 'clsx';

// styles
import styles from './StarRating.module.scss';

interface StarRatingProps {
  rating: number;
  className?: string;
}

export default function StarRating({ rating, className }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

    return (
      <div key={index} className={styles.star}>
        <div className={styles.fill} style={{ width: `${fillPercentage}%` }}></div>
      </div>
    );
  });

  return <div className={clsx(className, styles.starRating)}>{stars}</div>;
}
