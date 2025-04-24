'use client';
import React, { useEffect } from 'react';
import { TimerProps } from '@/types/shared';
// functions
import { startTimer } from '@/utils/startTimer';
// styles
import styles from './DealsTimer.module.scss';

export default function Timer({ title, endTime }: TimerProps) {
  useEffect(() => {
    const duration = Math.max(0, Math.floor(endTime / 1000));
    const display = document.querySelector<HTMLElement>(`.${styles.count}`);
    startTimer(duration, display);
  }, [endTime]);

  return (
    <div className={styles.timer}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.count}>
        <div className={styles.unit}>
          <span className={styles.value} id="days"></span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.unit}>
          <span className={styles.value} id="hours"></span>
          <span className={styles.label}>Hr</span>
        </div>
        <div className={styles.unit}>
          <span className={styles.value} id="minutes"></span>
          <span className={styles.label}>Min</span>
        </div>
        <div className={styles.unit}>
          <span className={styles.value} id="seconds"></span>
          <span className={styles.label}>Sec</span>
        </div>
      </div>
    </div>
  );
}
