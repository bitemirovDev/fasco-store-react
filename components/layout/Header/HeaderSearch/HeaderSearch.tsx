'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useDebounce } from 'react-use';
import { Api } from '@/services/api-client';
// components
import Fade from '@mui/material/Fade';
// styles
import styles from './HeaderSearch.module.scss';

export default function Search({ active }) {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useDebounce(
    () => {
      Api.products.searchProducts(searchQuery).then((products) => setProducts(products));
    },
    200,
    [searchQuery],
  );

  return (
    <>
      <div className={`${styles.search} ${active ? styles.active : ''}`}>
        <input
          type="text"
          placeholder="Search for some brands..."
          onFocus={() => setFocus(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery.trim().length > 0 && (
          <Fade in={focus}>
            <div className={styles.result}>
              {products.map((product, index) => (
                <Link key={index} href="#!">
                  <span>
                    {product.brand} {product.category}
                  </span>
                  <span>{product.quantity}</span>
                </Link>
              ))}

              {products.length === 0 && <span className={styles.noresult}>No results found</span>}
            </div>
          </Fade>
        )}
      </div>
      <Fade in={focus}>
        <div className={styles.backdrop} onClick={() => setFocus(false)}></div>
      </Fade>
    </>
  );
}
