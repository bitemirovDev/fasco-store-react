'use client';
import React, { useEffect, useState } from 'react';
import styles from './new-arrivals-nav.module.scss';

interface Props {
  selectedCategory: number | null;
  onCategoryChange: (category: number) => void;
}

export default function NewArrivalsNav({ selectedCategory, onCategoryChange }: Props) {
  const handleItemClick = (category: number) => {
    onCategoryChange(category);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setCategories(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${selectedCategory === item.id ? styles.active : ''}`}
            onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
