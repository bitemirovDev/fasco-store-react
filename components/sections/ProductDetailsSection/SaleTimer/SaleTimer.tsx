'use client';
import React, { useEffect } from 'react';
import { TimerProps } from '@/types/shared';
// functions
import { startTimer } from '@/utils/startTimer';
// styles
import styles from './SaleTimer.module.scss';

export default function SaleTimer({ title, endTime }: TimerProps) {
  useEffect(() => {
    const duration = Math.max(0, Math.floor(endTime / 1000));
    const display = document.querySelector<HTMLElement>(`.${styles['timer-counter']}`);
    startTimer(duration, display);
  }, [endTime]);

  return (
    <div className={styles.timer}>
      <p className={styles['timer-title']}>{title}</p>
      <div className={styles['timer-counter']}>
        <span className={styles['counter-dots']} id="days"></span>
        <span className={styles['counter-dots']} id="hours"></span>
        <span className={styles['counter-dots']} id="minutes"></span>
        <span id="seconds"></span>
      </div>
    </div>
  );
}
