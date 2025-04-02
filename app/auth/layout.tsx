'use client';
import React from 'react';
import AuthPicture from '@/components/layout/AuthPicture/AuthPicture';

// styles
import styles from './layout.module.scss';
import { redirect } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles['content-container']}>
        <AuthPicture sizes="(max-width: 768px) 100vw" src="/img/auth/sign-up-image.jpg" />
        <div className={styles.right}>
          <h1 className={styles.title}>Fasco</h1>
          {/* page content */}
          <div className={styles.content}>{children}</div>
          {/*  */}
          <div className={styles.terms}>
            <p>FASCO Terms & Codnitions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
