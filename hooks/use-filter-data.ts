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
            const categories = await Api.categories.getAll();
            setItems(categories);
            break;
          case 'collections':
            const collections = await Api.collections.getAll();
            setItems(collections);
            break;
          case 'brands':
            const brands = await Api.brands.getAll();
            setItems(brands);
            break;
          case 'sizes':
            const sizes = await Api.sizes.getAll();
            setItems(sizes);
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
  }, []);

  return { items: transformFilterData(items), loading };
};
