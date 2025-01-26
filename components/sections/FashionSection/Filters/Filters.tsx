'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import qs from 'qs';
// hooks
import { useFilters, useQueryFilters, useFilterData } from '@/hooks';
// types
import { QueryFilterParams } from '@/hooks/use-query-filters';
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
  const { items: sizes, loading: loadingSizes } = useFilterData('sizes');

  const handleShowButton = (params: QueryFilterParams) => {
    const query = qs.stringify(params, { arrayFormat: 'comma' });
    router.push(`?${query}`, { scroll: false });
  };

  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Filters</h4>
      <GenderFilter />
      <PriceFilter prices={filters.prices} min={0} max={500} onPriceChange={filters.setPrices} />
      <SizeGroup
        items={sizes}
        loading={loadingSizes}
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
        <Button className="btn--secondary">Reset</Button>
        <Button className="btn--primary" onClick={() => handleShowButton(params)}>
          Show
        </Button>
      </div>
    </div>
  );
}
