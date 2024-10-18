'use client';
import styles from './price.module.scss';
import { useState } from 'react';
import { Slider } from '@mui/material';

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

function pricetext(value: number) {
  return `${value}$`;
}

export default function Prices() {
  const [price, setPrice] = useState<number | number[]>([0, 500]);

  const handlePrice = (event: Event, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <div className={styles.prices}>
      <h5>Price</h5>
      <Slider
        min={0}
        max={500}
        getAriaLabel={() => 'Price range'}
        value={price}
        onChange={handlePrice}
        valueLabelDisplay="auto"
        getAriaValueText={pricetext}
        sx={rangeInputStyles}
      />
      <div className={styles.values}>
        <span>${price[0]}</span>
        <span>${price[1]}</span>
      </div>
    </div>
  );
}
