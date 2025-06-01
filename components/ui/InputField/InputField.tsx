import styles from './InputField.module.scss';
import clsx from 'clsx';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  borders: boolean;
  additionalClasses?: string;
}

export default function InputField({ id, label, type, borders, additionalClasses }: InputFieldProps) {
  return (
    <div className={clsx(styles.field, additionalClasses)}>
      <input
        type={type}
        id={id}
        className={clsx(styles.input, borders ? styles['input--bordered'] : '')}
        placeholder=""
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
