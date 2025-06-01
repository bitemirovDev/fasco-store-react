import React from 'react';
import styles from './FollowUsSection.module.scss';
import { Container } from '@/components/shared';
import clsx from 'clsx';
import FollowUsSlider from './FollowUsSlider/FollowUsSlider';

export default function FollowUsSection() {
  return (
    <section className={styles.section}>
      <Container className="container-full d-flex ai-c fd-c gap-70">
        <div className={styles.header}>
          <h2 className={clsx(styles.title, 'headline-2')}>Follow Us On Instagram</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque duis ultrices sollicitudin{' '}
          </p>
        </div>

        <FollowUsSlider />
      </Container>
    </section>
  );
}
