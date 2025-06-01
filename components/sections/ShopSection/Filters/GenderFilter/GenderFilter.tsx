'use client';
import React from 'react';
import styles from './GenderFilter.module.scss';

interface GenderFilterProps {
  selected: Set<string>;
  onClickGender: (id: string) => void;
}

export default function Gender({ selected, onClickGender }: GenderFilterProps) {
  return (
    <div className={styles.gender}>
      <ul>
        <li onClick={() => onClickGender('2')} className={selected.has('2') ? styles.active : ''}>
          Women
        </li>
        <li onClick={() => onClickGender('1')} className={selected.has('1') ? styles.active : ''}>
          Men
        </li>
      </ul>
    </div>
  );
}
