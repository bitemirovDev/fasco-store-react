import styles from './Separator.module.scss';

export default function Separator() {
  return (
    <div className={styles.separator}>
      <span className={styles['separator-text']}>OR</span>
    </div>
  );
}
