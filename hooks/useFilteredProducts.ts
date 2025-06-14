'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { ProductCardData } from '@/types/product';

import { transformProductForCard } from '@/utils/transformProductForCard ';

export function useFilteredProducts(page: number, limit: number = 9) {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<ProductCardData[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);

      // превращаем параметры обратно в строку
      const query = searchParams.toString();

      try {
        const response = await axios.get(`/api/shop?${query}&page=${page}&limit=${limit}`);
        const transformedProductsForCard = transformProductForCard(response.data.products);
        setProducts(transformedProductsForCard);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [searchParams, page, limit]);

  return { products, loading, totalPages };
}
