import styles from './DiscountCodeForm.module.scss';
import InputField from '@/components/ui/InputField/InputField';
import { Button } from '../Button';

export default function DiscountCodeForm() {
  return (
    <div className={styles.form}>
      <InputField id="discount-code" label="Discount code" type="text" borders={false} />
      <Button className="btn btn--sm btn--primary">Apply</Button>
    </div>
  );
}
