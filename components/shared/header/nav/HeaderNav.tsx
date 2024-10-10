'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import styles from './header-nav.module.scss';
import { Link as LinkScroll } from 'react-scroll';
import { HeaderNavButton } from '@/components/ui/button';

// icons

import SearchIcon from '@/public/img/icons/search.svg';
import UserIcon from '@/public/img/icons/user.svg';
// import StarIcon from '@/public/img/icons/star.svg';
import CartIcon from '@/public/img/icons/cart.svg';

export default function HeaderNav() {
  const [isLogedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href="/">Fasco</Link>
          </div>

          <ul className={styles.list}>
            <li className={`${styles['list-item']} ${styles.active}`}>
              <Link href="/">Home</Link>
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
            <li className={styles['list-item']}>
              <Link href="/shop">Shop</Link>
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
                <HeaderNavButton className={styles.btn} src={SearchIcon} />
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
        </div>
      </div>
    </nav>
  );
}
