import styles from './FavoritesSection.module.scss';
import { Container } from '@/components/shared';
import FavoritesList from './FavoritesList/FavoritesList';

export default function FavoritesSection() {
  return (
    <section className={styles.favorites}>
      <Container className="container">
        <FavoritesList />
      </Container>
    </section>
  );
}
