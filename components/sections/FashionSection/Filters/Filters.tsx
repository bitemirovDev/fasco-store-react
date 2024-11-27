'use client';
import React from 'react';
import { useFilterData } from '@/hooks/use-filter-data';
import styles from './Filters.module.scss';
import { useRouter } from 'next/navigation';
import qs from 'qs';

// hooks
import { useFilters } from '@/hooks/use-filters';
import { useQueryFilters } from '@/hooks/use-query-filters';
import { QueryFilterParams } from '@/hooks/use-query-filters';

// components
import Gender from './GenderFilter/GenderFilter';
import { Price } from './PriceFilter/PriceFilter';
import { SizeGroup } from '@/components/shared/SizeGroup/SizeGroup';
import { FilterCheckboxGroup } from '@/components/shared/FilterCheckboxGroup/FilterCheckboxGroup';
import { Button } from '@/components/ui/Button';

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
