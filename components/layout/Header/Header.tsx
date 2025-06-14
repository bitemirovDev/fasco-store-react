'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// components
import HeaderNav from './HeaderNav/HeaderNav';
// icons & images
import SearchIcon from '@/public/img/icons/search.svg';
import UserIcon from '@/public/img/icons/user.svg';
// components
import { Container, CartButton } from '@/components/shared';
import { Button, HeaderNavButton } from '@/components/ui';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import ProfileDropdown from '@/components/shared/ProfileDropdown/ProfileDropdown';
// styles
import styles from './Header.module.scss';
import useCartStore from '@/store/useCartStore';

import type { Session } from 'next-auth';

interface Props {
  session: Session | null;
}

export default function Header({ session }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const { items } = useCartStore();

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <Container className="container">
      <header className={styles.header}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href="/">Fasco</Link>
          </div>

          <HeaderNav onPageChange={setCurrentPage} currentPage={currentPage} />

          {session ? (
            <>
              <div className={styles.btns}>
                <HeaderNavButton className={styles.btn} src={SearchIcon} onClick={() => setShowSearch(!showSearch)} />
                <HeaderNavButton
                  className={styles.btn}
                  src={UserIcon}
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                />
                <ProfileDropdown
                  isOpen={showProfileDropdown}
                  username={session.user?.name || 'Guest'}
                  setIsOpen={setShowProfileDropdown}
                />
                <CartButton additionalclassName={styles.btn} count={items.length} />
              </div>
              <HeaderSearch active={showSearch} onChange={setShowSearch} />
            </>
          ) : (
            <div className="nav__btn">
              <Link href="/auth/login">
                <Button className="btn--primary btn--sm">Sign in</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}
