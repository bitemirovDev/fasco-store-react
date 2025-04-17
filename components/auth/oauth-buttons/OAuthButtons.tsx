'use client';
import React from 'react';
import styles from './OAuthButtons.module.scss';
import { signIn } from 'next-auth/react';

import { SVGIcon } from '@/components/ui';
import GitHubIcon from '@/public/img/auth/socials/github-brands-solid.svg';
import GoogleIcon from '@/public/img/auth/socials/google-brands.svg';
import { DEFAULT_REDIRECT_ROUTE } from '@/routes';

export default function OAuthButtons() {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      redirectTo: DEFAULT_REDIRECT_ROUTE,
      prompt: 'login',
    });
  };
  return (
    <div className={styles.socials}>
      <button className={styles['social-button']} onClick={() => onClick('google')}>
        <SVGIcon icon={GoogleIcon} width={20} height={20} />
        Google
      </button>
      <button className={styles['social-button']} onClick={() => onClick('github')}>
        <SVGIcon icon={GitHubIcon} width={20} height={20} />
        GitHub
      </button>
    </div>
  );
}
