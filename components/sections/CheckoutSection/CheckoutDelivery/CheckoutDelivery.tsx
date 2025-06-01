import styles from './CheckoutDelivery.module.scss';
import InputField from '@/components/ui/InputField/InputField';
import SelectField from '@/components/ui/SelectField/SelectField';
import BigBoldCheckbox from '@/components/shared/BigBoldCheckbox/BigBoldCheckbox';

const countries = [
  { value: 'RU', label: 'Russia' },
  { value: 'UA', label: 'Ukraine' },
  { value: 'KZ', label: 'Kazakhstan' },
  { value: 'BY', label: 'Belarus' },
  { value: 'GE', label: 'Georgia' },
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'PL', label: 'Poland' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'BE', label: 'Belgium' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'SE', label: 'Sweden' },
  { value: 'NO', label: 'Norway' },
  { value: 'FI', label: 'Finland' },
  { value: 'DK', label: 'Denmark' },
  { value: 'AU', label: 'Australia' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'CN', label: 'China' },
  { value: 'JP', label: 'Japan' },
  { value: 'KR', label: 'South Korea' },
  { value: 'IN', label: 'India' },
  { value: 'BR', label: 'Brazil' },
  { value: 'MX', label: 'Mexico' },
  { value: 'AR', label: 'Argentina' },
  { value: 'CL', label: 'Chile' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'EG', label: 'Egypt' },
  { value: 'TR', label: 'Turkey' },
  { value: 'SA', label: 'Saudi Arabia' },
  { value: 'AE', label: 'United Arab Emirates' },
  { value: 'IR', label: 'Iran' },
  { value: 'IQ', label: 'Iraq' },
  { value: 'PK', label: 'Pakistan' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'TH', label: 'Thailand' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'PH', label: 'Philippines' },
  { value: 'SG', label: 'Singapore' },
  { value: 'IL', label: 'Israel' },
  { value: 'GR', label: 'Greece' },
  { value: 'CZ', label: 'Czech Republic' },
  { value: 'SK', label: 'Slovakia' },
];

export default function CheckoutDelivery() {
  return (
    <div className={styles.delivery}>
      <h3 className={styles.title}>Delivery</h3>
      <SelectField id="country" label="Country" borders={true} options={countries} withSearch={true} />
      <div className={styles.row}>
        <InputField label="First Name" borders type="text" id="first-name" />
        <InputField label="Last Name" borders type="text" id="last-name" />
      </div>
      <InputField label="Address" borders type="text" id="address" />
      <div className={styles.row}>
        <InputField label="City" borders type="text" id="city" />
        <InputField label="Postal Code" borders type="text" id="postal-code" />
      </div>
      <BigBoldCheckbox label="Save This Info for future" id="save-info-delivery" />
    </div>
  );
}
