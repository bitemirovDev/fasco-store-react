import styles from './Subtitle.module.scss';

export default function Subtitle({ subtitle }: { subtitle: string }) {
  return <h2 className={styles.subtitle}>{subtitle}</h2>;
}
