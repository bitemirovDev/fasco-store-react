import styles from './PageTitle.module.scss';
import Breadcrumbs from '@/components/shared/Breadcrumbs/Breadcrumbs';

type PageTitleProps = {
  title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className={styles.header}>
      <h1 className={`${styles.title} headline-3`}>{title}</h1>
      <Breadcrumbs />
    </div>
  );
}
