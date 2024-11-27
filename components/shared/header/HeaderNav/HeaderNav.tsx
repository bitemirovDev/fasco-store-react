'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './HeaderNav.module.scss';
import { Link as LinkScroll } from 'react-scroll';
import { HeaderNavButton } from '@/components/ui/Button';
import Search from '../Search/Search';

// icons
import SearchIcon from '@/public/img/icons/search.svg';
import UserIcon from '@/public/img/icons/user.svg';
import CartIcon from '@/public/img/icons/cart.svg';

export default function HeaderNav() {
  const [isLogedIn, setIsLoggedIn] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');

  console.log(setIsLoggedIn);

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className={styles.nav}>
      <div className="container">
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
            <ul className={styles.btns}>
              <li className={styles['btns-item']}>
                <HeaderNavButton className={styles.btn} src={SearchIcon} onClick={handleSearch} />
              </li>
              <li className={styles['btns-item']}>
                <HeaderNavButton className={styles.btn} src={UserIcon} />
              </li>
              {/* <li className={styles['btns-item']}>
                <HeaderNavButton className={styles.btn} src={StarIcon} />
              </li> */}
              <li className={styles['btns-item']}>
                <HeaderNavButton className={styles.btn} src={CartIcon} />
              </li>
            </ul>
          )}

          {!isLogedIn && (
            <div className="nav__btn">
              <Button className="btn--small">
                <Link href="#!">Sign up</Link>
              </Button>
            </div>
          )}

          <Search active={showSearch} />
        </div>
      </div>
    </nav>
  );
}
