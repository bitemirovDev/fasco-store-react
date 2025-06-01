import styles from './CheckoutContact.module.scss';
import Link from 'next/link';
import InputField from '@/components/ui/InputField/InputField';

export default function CheckoutContact() {
  return (
    <div className={styles.contact}>
      <div className={styles.account}>
        <h3 className={styles.title}>Contact</h3>
        <p>
          Have an account?{' '}
          <Link href="#" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
      <InputField label="Email Address" id="email" type="email" borders={true} />
    </div>
  );
}
