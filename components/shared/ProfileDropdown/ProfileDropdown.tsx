import React from 'react';
import styles from './ProfileDropdown.module.scss';
import clsx from 'clsx';

import { signOutUser } from '@/actions/auth';

import OrdersIcon from '@/public/img/icons/orders.svg';
import FavouritesIcon from '@/public/img/icons/favourites-heart.svg';
import SignOutIcon from '@/public/img/icons/sign-out-icon.svg';
import ThemeIcon from '@/public/img/icons/theme.svg';

import { ProfileDropdownButton } from '@/components/shared/Button';

interface ProfileDropdownProps {
  email: string;
  isOpen: boolean;
}

export default function ProfileDropdown({ isOpen, email }: ProfileDropdownProps) {
  return (
    <div className={clsx(styles.dropdown, isOpen && styles.open)}>
      <p className={styles.email}>{email}</p>

      <div className={styles.list}>
        {/* <ProfileDropdownButton className={styles.item} src={OrdersIcon} text="Orders" /> */}
        <ProfileDropdownButton
          className={styles.item}
          width="16"
          height="16"
          src={OrdersIcon}
          text="Orders"
          viewBox="0 0 256 256"
        />
        <ProfileDropdownButton
          className={styles.item}
          width="16"
          height="16"
          src={FavouritesIcon}
          text="Favorites"
          viewBox="0 0 32 32"
        />
        <ProfileDropdownButton
          className={styles.item}
          width="16"
          height="16"
          src={ThemeIcon}
          text="Dark Mode"
          viewBox="0 0 24 24"
        />
        <ProfileDropdownButton
          className={styles.item}
          width="16"
          height="16"
          src={SignOutIcon}
          text="Sign Out"
          viewBox="0 0 256 256"
          onClick={() => signOutUser()}
        />
      </div>
    </div>
  );
}
