import React from 'react';
import Link from 'next/link';
// components
import { Container } from '@/components/shared';
// styles
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="container d-flex fd-c gap-50">
        <div className={styles.row}>
          <div className={styles.logo}>
            <Link href={'#!'}>Fasco</Link>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>Support Center</li>
              <li>Invoicing</li>
              <li>Contract</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>FAQ,s</li>
            </ul>
          </nav>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2024 BitemirovDev . All Rights Reseved.</p>
        </div>
      </Container>
    </footer>
  );
}
