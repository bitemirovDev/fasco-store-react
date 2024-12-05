'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { Button } from '@/components/ui/Button';
import { HeaderNavButton } from '@/components/ui/Button';
import Search from '../Search/Search';
import CartButton from '../../CartButton/CartButton';
import Container from '../../Container';

// icons
import SearchIcon from '@/public/img/icons/search.svg';
import UserIcon from '@/public/img/icons/user.svg';

// styles
import styles from './HeaderNav.module.scss';

export default function HeaderNav() {
  // const [isLogedIn, setIsLoggedIn] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const isLogedIn = true;

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href="/">Fasco</Link>
          </div>

          <ul className={styles.list}>
            <li className={`${styles['list-item']} ${currentPage === '/' ? styles.active : ''}`}>
              <Link href="/" onClick={() => setCurrentPage('/')}>
                Home
              </Link>
            </li>
            <li className={styles['list-item']}>
              <LinkScroll to="deals" smooth={true} duration={500}>
                Deals
              </LinkScroll>
            </li>
            <li className={styles['list-item']}>
              <LinkScroll to="new-arrivals" smooth={true} duration={500}>
                New Arrivals
              </LinkScroll>
            </li>
            <li
              className={`${styles['list-item']} ${currentPage === '/shop' ? styles.active : ''}`}>
              <Link href="/shop" onClick={() => setCurrentPage('/shop')}>
                Shop
              </Link>
            </li>
            {!isLogedIn && (
              <li className={styles['list-item']}>
                <Link href="#!">Sign in</Link>
              </li>
            )}
          </ul>

          {isLogedIn && (
            <>
              <div className={styles.btns}>
                <HeaderNavButton className={styles.btn} src={SearchIcon} onClick={handleSearch} />
                <HeaderNavButton className={styles.btn} src={UserIcon} />
                <CartButton className={styles.btn} />
              </div>
              <Search active={showSearch} />
            </>
          )}

          {!isLogedIn && (
            <div className="nav__btn">
              <Button className="btn--small">
                <Link href="#!">Sign up</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
}
