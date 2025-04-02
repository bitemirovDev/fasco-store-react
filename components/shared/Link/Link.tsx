import styles from './Link.module.scss';

export function Link({ href, children }) {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}
