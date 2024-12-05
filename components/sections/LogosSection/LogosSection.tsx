import React from 'react';
import Image from 'next/image';
import styles from './LogosSection.module.scss';

export default function LogosSection() {
  return (
    <section className={styles.logos}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              src="/img/logos/chanel.jpg"
              alt="chanel logo"
            />
          </div>
          <div className={styles.logo}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              src="/img/logos/louis.jpg"
              alt="louis logo"
            />
          </div>
          <div className={styles.logo}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              src="/img/logos/prada.jpg"
              alt="prada logo"
            />
          </div>
          <div className={styles.logo}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              src="/img/logos/calvin.jpg"
              alt="calvin logo"
            />
          </div>
          <div className={styles.logo}>
            <Image
              fill
              style={{ objectFit: 'contain' }}
              width={0}
              height={0}
              src="/img/logos/denim.jpg"
              alt="denim logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
