import { transformFilterData } from '../utils/transform-filter-data';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';

interface ReturnData {
  items: { text: string; value: string }[];
  loading: boolean;
}

export const useFilterData = (prop: string): ReturnData => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        switch (prop) {
          case 'categories':
            const categories = await Api.products.getProductCategories();
            setItems(categories);
            break;
          case 'collections':
            const collections = await Api.products.getProductCollections();
            setItems(collections);
            break;
          case 'brands':
            const brands = await Api.products.getProductBrands();
            setItems(brands);
            break;
          default:
            break;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [prop]);

  return { items: transformFilterData(items), loading };
};
