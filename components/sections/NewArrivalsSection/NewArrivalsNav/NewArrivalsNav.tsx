import styles from './NewArrivalsNav.module.scss';

interface Props {
  selectedCategory: number | null;
  onCategoryChange: (category: number) => void;
}

const arrivalsCategories = [
  { id: 1, name: `Men's` },
  { id: 2, name: `Women's` },
  { id: 13, name: 'Women Accessories' },
  { id: 14, name: 'Men Accessories' },
  { id: 5, name: 'Discount' },
];

export default function NewArrivalsNav({ selectedCategory, onCategoryChange }: Props) {
  const handleItemClick = (category: number) => {
    onCategoryChange(category);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {arrivalsCategories.map((item) => (
          <li
            key={item.id}
            className={`${styles.item} ${selectedCategory === item.id ? styles.active : ''}`}
            onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
