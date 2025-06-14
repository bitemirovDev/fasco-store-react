'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
// components
import { Skeleton } from '@mui/material';
import SVGIcon from '@/components/ui/SVGIcon';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// icons & images
import Arrow from '@/public/img/icons/filter_arrow.svg';
// types & interfaces
import { FilterCheckboxProps } from '../FilterCheckbox/FilterCheckbox';
// styles
import styles from './FilterCheckboxGroup.module.scss';

type Item = FilterCheckboxProps;

interface FilterCheckboxGroupProps {
  title: string;
  items: Item[];
  loading?: boolean;
  className?: string;
  max?: number;
  name?: string;
  selected: Set<string>;
  onClickCheckbox?: (id: string) => void;
}

export default function FilterCheckboxGroup({
  title,
  items,
  loading,
  max,
  name,
  selected,
  onClickCheckbox,
}: FilterCheckboxGroupProps) {
  const [show, setShow] = useState(true);

  if (loading) {
    if (max) {
      return (
        <div className={styles.checkboxGroup}>
          <h5>{title}</h5>
          <div className={clsx(`${show ? styles.show : ''}`, styles.list)}>
            {...Array(max)
              .fill(0)
              .map((item, index) => <Skeleton sx={{ transform: 'none', height: '20px' }} key={index} />)}
          </div>
        </div>
      );
    }

    return (
      <div className={styles.checkboxGroup}>
        <h5>{title}</h5>
        <div className={clsx(`${show ? styles.show : ''}`, styles.list)}>
          {...Array(10)
            .fill(0)
            .map((item, index) => <Skeleton sx={{ transform: 'none', height: '20px' }} key={index} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkboxGroup}>
      <h5 onClick={() => setShow(!show)}>{title}</h5>

      <div className={clsx(`${show ? styles.show : ''}`, styles.list)}>
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            name={name}
            text={item.text}
            value={item.value}
            checked={selected.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            className={styles['list-item']}
          />
        ))}
      </div>

      <div className={`${styles.arrow} ${show ? styles.active : ''}`}>
        <SVGIcon width={14} height={28} fill="none" icon={Arrow} />
      </div>
    </div>
  );
}
