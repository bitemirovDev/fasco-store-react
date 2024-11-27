import React from 'react';
import styles from './StarRating.module.scss';
import clsx from 'clsx';

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className }) => {
  // Массив для 5 звезд
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;

    return (
      <div key={index} className={styles.star}>
        <div className={styles.fill} style={{ width: `${fillPercentage}%` }}></div>
      </div>
    );
  });

  return <div className={clsx(className, styles.starRating)}>{stars}</div>;
};

export default StarRating;
