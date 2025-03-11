import styles from './Form-input.module.scss';

interface FormInputProps {
  name?: string;
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
}

export default function FormInput({ name, id, label, type, placeholder }: FormInputProps) {
  return (
    <div className={styles['form-field']}>
      <input type={type} placeholder={placeholder} className={styles.input} name={name} id={id} />
      <label className={styles['input-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
