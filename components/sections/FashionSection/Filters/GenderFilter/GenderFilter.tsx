'use client';
import React, { useState } from 'react';
import styles from './GenderFilter.module.scss';

export default function Gender() {
  const [gender, setGender] = useState('men');

  const handleGender = (gender: string) => {
    setGender(gender);
  };

  return (
    <div className={styles.gender}>
      <ul>
        <li
          onClick={() => handleGender('women')}
          className={gender === 'women' ? styles.active : ''}>
          Women
        </li>
        <li onClick={() => handleGender('men')} className={gender === 'men' ? styles.active : ''}>
          Men
        </li>
      </ul>
    </div>
  );
}
