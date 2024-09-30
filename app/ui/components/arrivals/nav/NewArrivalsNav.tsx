'use client';
import React from 'react';
import styles from './new-arrivals-nav.module.scss';

interface Props {
  selectedCategory: number | null;
  onCategoryChange: (category: number) => void;
}

const categories = [
  {
    title: 'Men’s',
    id: 1,
  },
  {
    title: 'Women’s',
    id: 2,
  },
  {
    title: 'Women Accessories',
    id: 3,
  },
  {
    title: 'Men Accessories',
    id: 4,
  },
  {
    title: 'Discount Deals',
    id: 5,
  },
];

export default function NewArrivalsNav({ selectedCategory, onCategoryChange }: Props) {
  const handleItemClick = (category: number) => {
    onCategoryChange(category);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${selectedCategory === item.id ? styles.active : ''}`}
            onClick={() => handleItemClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
