'use client';
import React, { useRef, useState } from 'react';
import { useDebounce } from 'react-use';
import { Api } from '@/services/api-client';
// components
import Fade from '@mui/material/Fade';
// styles
import styles from './HeaderSearch.module.scss';

import { useClickAway } from 'react-use';
import { useSearchBuilder } from '@/hooks/useSearchBuilder';

import HeaderSearchItem from './HeaderSearchItem/HeaderSearchItem';
import type { ResultItem } from '@/app/api/products/search/route';

interface SearchProps {
  active: boolean;
  onChange: (state: boolean) => void;
}

export default function Search({ active, onChange }: SearchProps) {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState<ResultItem[] | null>(null);

  const ref = useRef(null);

  useClickAway(ref, () => {
    onChange(false);
  });

  const { pushWithParams } = useSearchBuilder();

  useDebounce(
    () => {
      Api.products.searchProducts(searchQuery).then((items) => setItems(items));
    },
    200,
    [searchQuery],
  );

  const handleClick = (brand: number, category?: number) => {
    pushWithParams({
      params: {
        brands: brand,
        categories: category,
      },
      basePath: '/shop',
    });
    onChange(false);
    setFocus(false);
    setSearchQuery('');
  };

  return (
    <>
      <div ref={ref} className={`${styles.search} ${active ? styles.active : ''}`}>
        <input
          type="text"
          placeholder="Search for some brands..."
          onFocus={() => setFocus(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {searchQuery.trim().length > 0 && items && (
          <Fade in={focus}>
            <div className={styles.result}>
              {items.map((item, index) => (
                <HeaderSearchItem onClick={handleClick} key={index} item={item} />
              ))}

              {items.length === 0 && <span className={styles.noresult}>No results found</span>}
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
