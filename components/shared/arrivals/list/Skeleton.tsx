import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from './new-arrivals-list.module.scss';

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((card, index) => (
      <div key={index} className={styles.skeleton}>
        <Skeleton height={400} borderRadius={10} />
        <Skeleton height={40} />
        <div className="d-flex jc-sp">
          <Skeleton width={145} height={19} />
          <Skeleton width={100} height={19} />
        </div>
        <Skeleton height={20} width={90} />
      </div>
    ));
}
