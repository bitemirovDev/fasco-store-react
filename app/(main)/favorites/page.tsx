import { PageTitle } from '@/components/shared';
import { FollowUsSection, FavoritesSection } from '@/components/sections';

export default function Favorites() {
  return (
    <>
      <PageTitle title="My Favorites" />
      <FavoritesSection />
      <FollowUsSection />
    </>
  );
}
