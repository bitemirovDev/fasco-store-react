import styles from './FormInput.module.scss';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  error?: string;
  type?: string;
}

export default function FormInput({ id, label, error, ...field }: FormInputProps) {
  console.log(error);
  return (
    <div className={styles['form-field']}>
      <input {...field} className={styles.input} id={id} />
      <label className={styles['input-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
