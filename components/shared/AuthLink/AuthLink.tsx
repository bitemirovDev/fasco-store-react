import styles from './AuthLink.module.scss';
import Link from 'next/link';

interface AuthLinkProps {
  question?: string;
  href: string;
  title: string;
}

export function AuthLink({ href, title, question }: AuthLinkProps) {
  if (!question) {
    return (
      <span className={styles.link}>
        <Link href={href}>{title}</Link>
      </span>
    );
  }

  return (
    <span className={styles.link}>
      <p>{question}</p>
      <Link href={href}>{title}</Link>
    </span>
  );
}
