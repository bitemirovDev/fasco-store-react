import styles from './PageTitle.module.scss';

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.title} headline-3`}>{title}</h1>
    </div>
  );
}
