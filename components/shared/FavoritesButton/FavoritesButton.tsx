import styles from './FavoritesButton.module.scss';
import SVGIcon from '@/components/ui/SVGIcon';
import HeartIcon from '@/public/img/icons/heart-solid.svg';

export default function FavoritesButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <SVGIcon icon={HeartIcon} width={24} height={24} fill="#e1e1e1" />
    </button>
  );
}
