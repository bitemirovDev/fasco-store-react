'use client';
import React from 'react';
import styles from './OAuthButtons.module.scss';
import { signIn } from 'next-auth/react';

import { SVGIcon } from '@/components/ui';
import GitHubIcon from '@/public/img/auth/socials/github-brands-solid.svg';
import GoogleIcon from '@/public/img/auth/socials/google-brands.svg';

export default function OAuthButtons() {
  return (
    <div className={styles.socials}>
      <button className={styles['social-button']} onClick={() => signIn('google')}>
        <SVGIcon icon={GoogleIcon} width={20} height={20} />
        Sign up with Google
      </button>
      <button className={styles['social-button']} onClick={() => signIn('github')}>
        <SVGIcon icon={GitHubIcon} width={20} height={20} />
        Sign up with GitHub
      </button>
    </div>
  );
}
