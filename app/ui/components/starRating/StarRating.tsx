import React from 'react';
import styles from './star-rating.module.scss';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Массив для 5 звезд
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;
    return (
      <div key={index} className={styles.star}>
        <div className={styles.fill} style={{ width: `${fillPercentage}%` }}></div>
      </div>
    );
  });

  return <div className={styles.starRating}>{stars}</div>;
};

export default StarRating;
