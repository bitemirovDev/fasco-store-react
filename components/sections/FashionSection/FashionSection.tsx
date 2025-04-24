'use client';
import React, { useEffect, useState } from 'react';
import { useFilteredProducts } from '@/hooks/useFilteredProducts';
import { useRouter, useSearchParams } from 'next/navigation';
// styles
import styles from './FashionSection.module.scss';
// components
import { PageTitle, Container } from '@/components/shared';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import FashionProducts from './FashionProducts/FashionProducts';

export default function FashionSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = Number(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const { products: filteredProducts, loading, totalPages } = useFilteredProducts(currentPage, productsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  return (
    <section className={styles.fashion}>
      <Container>
        <PageTitle title="Fashion" />
        <div className={styles.content}>
          <Filters />
          <FashionProducts items={filteredProducts} loading={loading} productsPerPage={productsPerPage} />
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </Container>
    </section>
  );
}
