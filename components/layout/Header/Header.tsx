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

export default function Header({ session }) {
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const handleSearch = () => setShowSearch(!showSearch);

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href="/">Fasco</Link>
          </div>

          <HeaderNav onPageChange={setCurrentPage} currentPage={currentPage} />

          {session ? (
            <>
              <div className={styles.btns}>
                <HeaderNavButton className={styles.btn} src={SearchIcon} onClick={handleSearch} />
                <HeaderNavButton
                  className={styles.btn}
                  src={UserIcon}
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                />
                <ProfileDropdown isOpen={showProfileDropdown} email={session.user.email || 'Guest'} />
                <CartButton className={styles.btn} />
              </div>
              <HeaderSearch active={showSearch} />
            </>
          ) : (
            <div className="nav__btn">
              <Link href="/auth/login">
                <Button className="btn--primary btn--small">Sign in</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </Container>
  );
}
