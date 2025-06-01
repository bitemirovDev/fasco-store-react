import styles from './HeaderSearchItem.module.scss';
import type { ResultItem } from '@/app/api/products/search/route';

interface HeaderSearchItemProps {
  item: ResultItem;
  onClick: (brandId: number, categoryId?: number) => void;
}

export default function HeaderSearchItem({ onClick, item }: HeaderSearchItemProps) {
  return (
    <div className={styles.item} onClick={() => onClick(item.brand.id, item.category?.id)}>
      <span>
        {item.brand.name} {item.category?.name}
      </span>
      <span>{item.quantity}</span>
    </div>
  );
}
