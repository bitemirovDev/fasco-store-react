import styles from '@/app/style/modules/_nav.module.scss';

export default function ArrivalsNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>Men’s Fashion</li>
        <li className={`${styles['nav-item']} ${styles['nav-item--active']}`}>Women’s Fashion</li>
        <li className={styles['nav-item']}>Women Accessories</li>
        <li className={styles['nav-item']}>Men Accessories</li>
        <li className={styles['nav-item']}>Discount Deals</li>
      </ul>
    </nav>
  );
}
