import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useSet } from 'react-use';

export interface Filters {
  selectedCollections: Set<string>;
  selectedCategories: Set<string>;
  selectedBrands: Set<string>;
  selectedSizes: Set<string>;
  prices: {
    priceFrom: number;
    priceTo: number;
  };
}

interface ReturnProps extends Filters {
  setSelectedCollections: (key: string) => void;
  setSelectedCategories: (key: string) => void;
  setSelectedBrands: (key: string) => void;
  setSelectedSizes: (key: string) => void;
  setPrices: (event: Event, newValue: number | number[]) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const [prices, setPrices] = useState({
    priceFrom: searchParams.get('priceFrom') ? Number(searchParams.get('priceFrom')) : 0,
    priceTo: searchParams.get('priceTo') ? Number(searchParams.get('priceTo')) : 500,
  });

  const [selectedCollections, { toggle: toggleCollections }] = useSet(
    new Set<string>(
      searchParams.get('collections') ? searchParams.get('collections')?.split(',') : [],
    ),
  );
  const [selectedCategories, { toggle: toggleCategories }] = useSet(
    new Set<string>(
      searchParams.get('categories') ? searchParams.get('categories')?.split(',') : [],
    ),
  );
  const [selectedBrands, { toggle: toggleBrands }] = useSet(
    new Set<string>(searchParams.get('brands') ? searchParams.get('brands')?.split(',') : []),
  );
  const [selectedSizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []),
  );

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrices({
        priceFrom: newValue[0],
        priceTo: newValue[1],
      });
    }
  };

  return {
    selectedCollections,
    selectedCategories,
    selectedBrands,
    selectedSizes,
    prices,
    setPrices: handlePriceChange,
    setSelectedCollections: toggleCollections,
    setSelectedCategories: toggleCategories,
    setSelectedBrands: toggleBrands,
    setSelectedSizes: toggleSizes,
  };
};
