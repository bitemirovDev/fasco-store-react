import styles from './BigBoldCheckbox.module.scss';
import clsx from 'clsx';

interface BigBoldCheckboxProps {
  label: string;
  id: string;
  additionalClasses?: string;
}

export default function BigBoldCheckbox({ label, id, additionalClasses }: BigBoldCheckboxProps) {
  return (
    <div className={clsx(styles.checkbox, additionalClasses)}>
      <input type="checkbox" id={id} className={styles.input} />
      <span className={styles.span}></span>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
}
