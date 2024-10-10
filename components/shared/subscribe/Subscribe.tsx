import React from 'react';
import styles from './subscribe.module.scss';
import { Button } from '@/components/ui/button';

export default function Subscribe() {
  return (
    <section className={styles.subscribe}>
      <div className="container d-flex jc-c">
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={`${styles.title} headline-2`}>Subscribe To Our Newsletter</h2>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
              sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>
          </div>
          <div className={styles.input}>
            <input placeholder="example@gmail.com" type="email" />
          </div>
          <div className={styles.btn}>
            <Button className="btn--medium ">Subscribe Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
