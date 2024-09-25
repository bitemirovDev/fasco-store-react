'use client';
import React from 'react';
import styles from '@/app/style/modules/_timer.module.scss';
import startTimer from '@/app/lib/timer';
import { useEffect } from 'react';

import { Timer as TimerProps } from '../interfaces';

export default function Timer({ title, endDate }: TimerProps) {
  useEffect(() => {
    const currentTime = new Date().getTime();
    const duration = Math.max(0, Math.floor((endDate.getTime() - currentTime) / 1000));
    const display = document.querySelector<HTMLElement>(`.${styles['timer-count']}`);
    startTimer(duration, display);
  });

  return (
    <div className={styles.timer}>
      <h4 className={styles['timer-title']}>{title}</h4>
      <div className={styles['timer-count']}>
        <div className={styles['timer-unit']}>
          <span className={styles['timer-value']} id="days"></span>
          <span className={styles['timer-label']}>Days</span>
        </div>
        <div className={styles['timer-unit']}>
          <span className={styles['timer-value']} id="hours"></span>
          <span className={styles['timer-label']}>Hr</span>
        </div>
        <div className={styles['timer-unit']}>
          <span className={styles['timer-value']} id="minutes"></span>
          <span className={styles['timer-label']}>Min</span>
        </div>
        <div className={styles['timer-unit']}>
          <span className={styles['timer-value']} id="seconds"></span>
          <span className={styles['timer-label']}>Sec</span>
        </div>
      </div>
    </div>
  );
}
