'use client';
import React from 'react';
// components
import { Slider } from '@mui/material';
// styles
import styles from './PriceFilter.module.scss';

const rangeInputStyles = {
  color: '#484848',
  boxSizing: 'border-box',
  '& .MuiSlider-thumb': {
    width: 12, // Ширина ползунка
    height: 12, // Высота ползунка
    backgroundColor: '#fff', // Цвет ползунка
    border: '1px solid #000',
    '&:hover': {
      boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.4)', // Эффект при наведении
    },
    '&:focus': {
      boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.4)',
    },
    '&.Mui-focusVisible': {
      boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.4)',
    },
  },
};

export interface PriceProps {
  prices: { priceFrom: number; priceTo: number };
  min?: number;
  max?: number;
  onPriceChange?: (event: Event, value: number | number[], activeThumb: number) => void;
}

export default function PriceFilter({ prices, min, max, onPriceChange }: PriceProps) {
  return (
    <div className={styles.prices}>
      <h5>Price</h5>
      <Slider
        min={min}
        max={max}
        value={[prices.priceFrom, prices.priceTo]}
        onChange={onPriceChange}
        sx={rangeInputStyles}
      />
      <div className={styles.values}>
        <span>${prices.priceFrom}</span>
        <span>${prices.priceTo}</span>
      </div>
    </div>
  );
}
