import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  resetFilters: () => void;
}

const parseParam = (param: string | null): string[] => {
  return param ? param.split(',').filter(Boolean) : [];
};

const parsePrices = (params: URLSearchParams) => ({
  priceFrom: Number(params.get('priceFrom')) || 0,
  priceTo: Number(params.get('priceTo')) || 500,
});

const applyParamToSet = (values: string[], clear: () => void, add: (val: string) => void) => {
  clear();
  values.forEach(add);
};

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();

  const collections = searchParams.get('collections');
  const brands = searchParams.get('brands');
  const categories = searchParams.get('categories');
  const sizes = searchParams.get('sizes');

  const [prices, setPrices] = useState(() => parsePrices(searchParams));

  const [selectedCollections, { toggle: toggleCollections, add: addCollections, clear: clearCollections }] = useSet(
    new Set<string>(),
  );
  const [selectedCategories, { toggle: toggleCategories, add: addCategories, clear: clearCategories }] = useSet(
    new Set<string>(),
  );
  const [selectedBrands, { toggle: toggleBrands, add: addBrands, clear: clearBrands }] = useSet(new Set<string>());
  const [selectedSizes, { toggle: toggleSizes, add: addSizes, clear: clearSizes }] = useSet(new Set<string>());

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrices({
        priceFrom: newValue[0],
        priceTo: newValue[1],
      });
    }
  };

  const resetFilters = () => {
    clearCollections();
    clearCategories();
    clearBrands();
    clearSizes();
    setPrices({
      priceFrom: 0,
      priceTo: 500,
    });
  };

  useEffect(() => {
    applyParamToSet(parseParam(collections), clearCollections, addCollections);
    applyParamToSet(parseParam(categories), clearCategories, addCategories);
    applyParamToSet(parseParam(sizes), clearSizes, addSizes);
    applyParamToSet(parseParam(brands), clearBrands, addBrands);
    setPrices(parsePrices(searchParams));
  }, [searchParams]);

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
    resetFilters,
  };
};
