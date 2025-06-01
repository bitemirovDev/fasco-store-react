'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';
// hooks
import { useFilters, useQueryFilters, useFilterData } from '@/hooks';
// types
import type { QueryFilterParams } from '@/hooks/use-query-filters';
// components
import GenderFilter from './GenderFilter/GenderFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import { SizeGroup, FilterCheckboxGroup } from '@/components/shared';
import { Button } from '@/components/ui';
// styles
import styles from './Filters.module.scss';

export default function Filters() {
  const router = useRouter();
  const filters = useFilters();
  const params = useQueryFilters(filters);

  const { items: categories, loading: loadingCategories } = useFilterData('categories');
  const { items: collections, loading: loadingCollections } = useFilterData('collections');
  const { items: brands, loading: loadingBrands } = useFilterData('brands');

  const handleShowButton = (params: QueryFilterParams) => {
    const query = qs.stringify(params, { arrayFormat: 'comma' });
    router.push(`?${query}&page=1`, { scroll: false });
  };

  const handleResetButton = () => {
    filters.resetFilters();
    router.push('/shop', { scroll: true });
  };

  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Filters</h4>
      <GenderFilter selected={filters.selectedCategories} onClickGender={filters.setSelectedCategories} />
      <PriceFilter prices={filters.prices} min={0} max={500} onPriceChange={filters.setPrices} />
      <SizeGroup
        sizes={['XS', 'S', 'M', 'L', 'XL', 'XXL']}
        selected={filters.selectedSizes}
        onClickSize={filters.setSelectedSizes}
      />
      <FilterCheckboxGroup
        title="Brands"
        name="brand"
        selected={filters.selectedBrands}
        items={brands}
        loading={loadingBrands}
        onClickCheckbox={filters.setSelectedBrands}
      />
      <FilterCheckboxGroup
        title="Categories"
        name="category"
        selected={filters.selectedCategories}
        items={categories}
        loading={loadingCategories}
        onClickCheckbox={filters.setSelectedCategories}
      />
      <FilterCheckboxGroup
        title="Collections"
        name="collection"
        selected={filters.selectedCollections}
        items={collections}
        max={3}
        loading={loadingCollections}
        onClickCheckbox={(id) => filters.setSelectedCollections(id)}
      />

      <div className={styles.btns}>
        <Button className="btn--secondary" onClick={() => handleResetButton()}>
          Reset
        </Button>
        <Button className="btn--primary" onClick={() => handleShowButton(params)}>
          Show
        </Button>
      </div>
    </div>
  );
}
