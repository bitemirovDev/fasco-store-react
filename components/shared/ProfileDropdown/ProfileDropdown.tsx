import React, { useRef } from 'react';
import clsx from 'clsx';
import { useClickAway } from 'react-use';
import { useRouter } from 'next/navigation';
import { useTopLoader } from 'nextjs-toploader';
import { signOut } from 'next-auth/react';

// components
import { ProfileDropdownButton } from '@/components/shared/Button';
// icons
import OrdersListIcon from '@/public/img/icons/orders-list.svg';
import FavouritesHeartIcon from '@/public/img/icons/heart-solid.svg';
import SignOutIcon from '@/public/img/icons/right-from-bracket-solid.svg';
// styles
import styles from './ProfileDropdown.module.scss';

interface ProfileDropdownProps {
  username: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProfileDropdown({ isOpen, username, setIsOpen }: ProfileDropdownProps) {
  const { start, done } = useTopLoader();

  const router = useRouter();
  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const handleFaviritesClick = () => {
    start();
    setIsOpen(false);
    router.push('/favorites');
    done();
  };

  return (
    <div ref={ref} className={clsx(styles.dropdown, isOpen && styles.open)}>
      <p className={styles.greetings}>
        Hi, <span>{username}</span>!
      </p>

      <div className={styles.list}>
        <ProfileDropdownButton
          classNameForButton={styles.item}
          widthForIcon="16"
          heightForIcon="16"
          fillForIcon="#484848"
          icon={OrdersListIcon}
          text="Orders"
        />
        <ProfileDropdownButton
          classNameForButton={styles.item}
          widthForIcon="16"
          heightForIcon="16"
          fillForIcon="#484848"
          icon={FavouritesHeartIcon}
          text="Favorites"
          onClick={() => handleFaviritesClick()}
        />
        <ProfileDropdownButton
          classNameForButton={styles.item}
          widthForIcon="16"
          heightForIcon="16"
          fillForIcon="#484848"
          icon={SignOutIcon}
          text="Sign Out"
          onClick={() => signOut()}
        />
      </div>
    </div>
  );
}
