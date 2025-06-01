'use client';
import { usePathname, useRouter } from 'next/navigation';

interface pushWithParamsProps {
  params: {
    brands: number;
    categories?: number | null;
  };
  basePath?: string;
}

export function useSearchBuilder() {
  const router = useRouter();
  const pathname = usePathname();

  function pushWithParams({ params, basePath = pathname }: pushWithParamsProps) {
    const query = new URLSearchParams();

    query.append('brands', String(params.brands));

    if (params.categories) {
      query.append('categories', String(params.categories));
    }

    router.push(`${basePath}?${query.toString()}`);
  }

  return { pushWithParams };
}
