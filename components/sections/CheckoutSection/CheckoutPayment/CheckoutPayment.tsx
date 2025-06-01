import styles from './CheckoutPayment.module.scss';
import InputField from '@/components/ui/InputField/InputField';
import SelectField from '@/components/ui/SelectField/SelectField';
import BigBoldCheckbox from '@/components/shared/BigBoldCheckbox/BigBoldCheckbox';

export default function CheckoutPayment() {
  const paymentMethods = [
    {
      value: 'credit-card',
      label: 'Credit Card',
      icon: 'credit-card-regular.svg',
    },
    {
      value: 'qiwi',
      label: 'QIWI Wallet',
      icon: 'qiwi-icon.svg',
    },
  ];
  return (
    <div className={styles.payment}>
      <h3 className={styles.title}>Payment</h3>
      <div>
        <SelectField options={paymentMethods} label="Payment Method" id="payment-method" borders withSearch={false} />
        <div className={styles.container}>
          <InputField id="card-number" label="Card Number" borders={true} type="text" additionalClasses={styles.lock} />
          <div className={styles.row}>
            <InputField id="exp-date" label="Expiration Date" borders={true} type="text" />
            <InputField id="sec-code" label="Security Code" borders={true} type="text" />
          </div>
          <InputField id="card-holder-name" label="Cardholder Name" borders={true} type="text" />
          <BigBoldCheckbox id="save-card" label="Save This Info for future" additionalClasses="pt-1.5" />
        </div>
      </div>
    </div>
  );
}
