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
// styles
import styles from './Header.module.scss';

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const handleSearch = () => setShowSearch(!showSearch);

  const isLogedIn = false;

  if (currentPage === '/auth/signUp' || currentPage === '/auth/signIn') return null;

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href="/">Fasco</Link>
          </div>

          <HeaderNav onPageChange={setCurrentPage} isLogedIn={isLogedIn} currentPage={currentPage} />

          {isLogedIn && (
            <>
              <div className={styles.btns}>
                <HeaderNavButton className={styles.btn} src={SearchIcon} onClick={handleSearch} />
                <HeaderNavButton className={styles.btn} src={UserIcon} />
                <CartButton className={styles.btn} />
              </div>
              <HeaderSearch active={showSearch} />
            </>
          )}

          {!isLogedIn && (
            <div className="nav__btn">
              <Button className="btn--primary btn--small">
                <Link href="#!">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}
