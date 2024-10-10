import styles from './brands.module.scss';
import SVGIcon from '@/components/ui/svg';
import Arrow from '@/public/img/icons/filter_arrow.svg';
import { useEffect, useState } from 'react';

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [showBrands, setShowBrands] = useState(false);
  const [activeBrands, setActiveBrands] = useState<number[]>([]);

  const handleBrands = (brand: number) => {
    if (activeBrands.includes(brand)) {
      setActiveBrands(activeBrands.filter((item) => item !== brand));
    } else {
      setActiveBrands([...activeBrands, brand]);
    }
  };

  useEffect(() => {
    fetch('/api/brands')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className={styles.brands}>
      <h5 onClick={() => setShowBrands(!showBrands)}>Brands</h5>
      <ul className={showBrands ? styles.show : ''}>
        {brands.map((brand, index) => (
          <li
            key={index}
            onClick={() => handleBrands(brand.id)}
            className={activeBrands.includes(brand.id) ? styles.active : ''}>
            {brand.name}
          </li>
        ))}
      </ul>

      <div className={`${styles.arrow} ${showBrands ? styles.active : ''}`}>
        <SVGIcon width={14} height={28} fill="none" icon={Arrow} />
      </div>
    </div>
  );
}
