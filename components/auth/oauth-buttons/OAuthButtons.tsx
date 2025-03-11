import React from 'react';
import Image from 'next/image';
import styles from './OAuthButtons.module.scss';
import clsx from 'clsx';

export default function OAuthButtons() {
  return (
    <div className={styles.socials}>
      <button className={clsx(styles['social-button'], styles['social-button--google'])}>
        <Image width={36} height={36} style={{ objectFit: 'cover' }} src="/img/auth/socials/google.jpg" alt="Google" />
        Sign up with Google
      </button>
      <button className={clsx(styles['social-button'], styles['social-button--email'])}>
        <Image width={42} height={42} style={{ objectFit: 'cover' }} src="/img/auth/socials/email.jpg" alt="Email" />
        Sign up with Email
      </button>
    </div>
  );
}
