import { ProductWithRelations } from '@/types/product';
import { useEffect, useState } from 'react';
import { Api } from '@/services/api-client';

export const useNewArrivalsSectionProducts = () => {
  const [newArrivalsProducts, setNewArrivalsProducts] = useState<
    Record<number, ProductWithRelations[]>
  >({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCategories = async () => {
      const categories = [1, 2, 13, 14, 5];

      const dataPromises = categories.map((category) =>
        Api.products.newArrivals(category).then((data) => [category, data]),
      );

      const resolvedData = await Promise.all(dataPromises);
      const productsByCategory = Object.fromEntries(resolvedData);

      setNewArrivalsProducts(productsByCategory);
      setLoading(false);
    };

    fetchAllCategories();
  }, []);

  return { items: newArrivalsProducts, loading: loading };
};
