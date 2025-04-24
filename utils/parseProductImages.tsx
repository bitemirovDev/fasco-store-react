import type { ProductImages } from '@/types/product';

export function parseProductImages(json: unknown): ProductImages {
  if (
    typeof json === 'object' &&
    json !== null &&
    'main' in json &&
    'additional' in json &&
    typeof (json as any).main === 'string' &&
    Array.isArray((json as any).additional) &&
    (json as any).additional.every((item: any) => typeof item === 'string')
  ) {
    return json as ProductImages;
  }

  // если структура неправильная — возвращаем дефолт
  return { main: '', additional: [] };
}
