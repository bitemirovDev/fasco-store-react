import styles from './CartDrawerFooter.module.scss';
import { Button } from '@/components/ui/Button';

export default function CartDrawerFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-total']}>
        <p>Subtotal</p>
        <span>$100.00</span>
      </div>
      <div className={styles['footer-btn']}>
        <Button className="btn--small btn--primary btn--wide">Checkout</Button>
      </div>
      <a className={styles['footer-link']} href="#!">
        View Cart
      </a>
    </div>
  );
}
