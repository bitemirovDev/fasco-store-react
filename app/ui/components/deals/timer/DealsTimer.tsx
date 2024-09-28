'use client';
import React from 'react';
import startTimer from '@/app/lib/timer';
import { useEffect } from 'react';

import { Timer as TimerProps } from '@/app/interfaces';
import styles from './deals-timer.module.scss';

export default function Timer({ title, endDate }: TimerProps) {
  useEffect(() => {
    const currentTime = new Date().getTime();
    const duration = Math.max(0, Math.floor((endDate.getTime() - currentTime) / 1000));
    const display = document.querySelector<HTMLElement>(`.${styles.count}`);
    startTimer(duration, display);
  });

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
