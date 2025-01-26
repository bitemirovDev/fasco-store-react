import React from 'react';
import Image from 'next/image';
import styles from './FeaturesSection.module.scss';

// Images
import Shipping from '@/public/img/features/shipping.jpg';
import Waranty from '@/public/img/features/waranty.jpg';
import Support from '@/public/img/features/support.jpg';
import Quality from '@/public/img/features/quality.jpg';

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ul className={styles.list}>
          <li className={styles['list-element']}>
            <div className={styles['list-picture']}>
              <Image
                style={{ objectFit: 'contain' }}
                fill
                src={Quality}
                alt="quality picture"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={styles['list-text']}>
              <p className={styles['list-title']}>High Quality</p>
              <p className={styles['list-desc']}>crafted from top materials</p>
            </div>
          </li>
          <li className={styles['list-element']}>
            <div className={styles['list-picture']}>
              <Image
                style={{ objectFit: 'contain' }}
                fill
                src={Waranty}
                alt="quality picture"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={styles['list-text']}>
              <p className={styles['list-title']}>Warrany Protection</p>
              <p className={styles['list-desc']}>Over 2 years</p>
            </div>
          </li>
          <li className={styles['list-element']}>
            <div className={styles['list-picture']}>
              <Image
                fill
                style={{ objectFit: 'contain' }}
                src={Shipping}
                alt="quality picture"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={styles['list-text']}>
              <p className={styles['list-title']}>Free Shipping</p>
              <p className={styles['list-desc']}>Order over 150 $</p>
            </div>
          </li>
          <li className={styles['list-element']}>
            <div className={styles['list-picture']}>
              <Image
                fill
                style={{ objectFit: 'contain' }}
                src={Support}
                alt="quality picture"
                sizes="(max-width: 768px) 100vw"
              />
            </div>
            <div className={styles['list-text']}>
              <p className={styles['list-title']}>24 / 7 Support</p>
              <p className={styles['list-desc']}>Dedicated support</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
