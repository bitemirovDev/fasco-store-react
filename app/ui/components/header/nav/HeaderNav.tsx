'use client';
import React from 'react';

import Link from 'next/link';
import { Button } from '../../../button';
import styles from './header-nav.module.scss';
import { Link as LinkScroll } from 'react-scroll';

export default function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.logo}>
            <a href="#!">Fasco</a>
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
              <Link href="#!">Shop</Link>
            </li>
            {/* <li className="nav__list-item">Pages <img src="./img/icons/arrow_down.svg" alt="arrow" /></li>
                  <li className="nav__list-item">Sign in</li> */}
          </ul>

          <div className="nav__btn">
            <Button className="btn--small">
              <Link href="#!">Sign in</Link>
            </Button>
          </div>
          {/* <ul className="nav__btns"> 
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/search.svg" alt="search" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/user.svg" alt="user" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/star.svg" alt="star" />
                    </button>
                  </li>
                  <li className="nav__btns-item">
                    <button>
                      <img src="./img/icons/cart.svg" alt="cart" />
                    </button>
                  </li>
                </ul> */}
        </div>
      </div>
    </nav>
  );
}
