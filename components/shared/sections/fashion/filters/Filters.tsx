'use client';
import React from 'react';
import { useFilterData } from '@/hooks/use-filter-data';
import styles from './filters.module.scss';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { useFilters } from '@/hooks/use-filters';

// components
import Gender from './gender/Gender';
import { Price } from './price/Price';
import { SizeGroup } from '@/components/shared/size-group/SizeGroup';
import { FilterCheckboxGroup } from '@/components/shared/filter-checkbox-group/FilterCheckboxGroup';
import { Button } from '@/components/ui/button';
import { useQueryFilters } from '@/hooks/use-query-filters';
import { QueryFilterParams } from '@/hooks/use-query-filters';

export default function Filters() {
  const router = useRouter();
  const filters = useFilters();
  const params = useQueryFilters(filters);

  const maxCollections = 3;

  const { items: categories, loading: loadingCategories } = useFilterData('categories');
  const { items: collections, loading: loadingCollections } = useFilterData('collections');
  const { items: brands, loading: loadingBrands } = useFilterData('brands');
  const { items: sizes, loading: loadingSizes } = useFilterData('sizes');

  const handleShowButtonClick = (params: QueryFilterParams) => {
    const query = qs.stringify(params, { arrayFormat: 'comma' });
    router.push(`?${query}`, { scroll: false });
  };
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Filters</h4>
      <Gender />
      <Price prices={filters.prices} min={0} max={500} onPriceChange={filters.setPrices} />
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
        max={maxCollections}
        loading={loadingCollections}
        onClickCheckbox={(id) => filters.setSelectedCollections(id)}
      />

      <div className={styles.btns}>
        <Button className="btn--secondary">Reset</Button>
        <Button className="btn--primary" onClick={() => handleShowButtonClick(params)}>
          Show
        </Button>
      </div>
    </div>
  );
}
