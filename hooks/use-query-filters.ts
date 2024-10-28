import { useEffect, useState } from 'react';
import { Filters } from './use-filters';

export interface QueryFilterParams {
  collections: string[];
  categories: string[];
  brands: string[];
  sizes: string[];
  priceFrom: number;
  priceTo: number;
}

export const useQueryFilters = (filters: Filters) => {
  const defaultQueryFilterParams: QueryFilterParams = {
    collections: [],
    categories: [],
    brands: [],
    sizes: [],
    priceFrom: 0,
    priceTo: 500,
  };

  const [params, setParams] = useState<QueryFilterParams>(defaultQueryFilterParams);

  useEffect(() => {
    setParams({
      collections: Array.from(filters.selectedCollections),
      categories: Array.from(filters.selectedCategories),
      brands: Array.from(filters.selectedBrands),
      sizes: Array.from(filters.selectedSizes),
      priceFrom: filters.prices.priceFrom,
      priceTo: filters.prices.priceTo,
    });
  }, [
    filters.selectedCollections,
    filters.selectedCategories,
    filters.selectedBrands,
    filters.selectedSizes,
    filters.prices,
  ]);

  return params;
};
