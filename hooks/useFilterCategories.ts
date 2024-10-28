import { useEffect, useState } from 'react';
import { Category } from '@prisma/client';
import { Api } from '@/services/api-client';

interface ReturnProps {
  categories: Category[];
}

export const useFilterCategories = (): ReturnProps => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await Api.categories.getAll();
        setCategories(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategories();
  }, []);

  return { categories };
};
