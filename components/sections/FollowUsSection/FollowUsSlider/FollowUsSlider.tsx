import clsx from 'clsx';
import Image from 'next/image';
// slides
import Slide9 from '@/public/img/follow-us-slider/is-9.avif';
import Slide10 from '@/public/img/follow-us-slider/is-10.avif';
import Slide11 from '@/public/img/follow-us-slider/is-11.avif';
import Slide12 from '@/public/img/follow-us-slider/is-12.avif';
import Slide16 from '@/public/img/follow-us-slider/is-16.avif';
import Slide23 from '@/public/img/follow-us-slider/is-23.avif';
import Slide24 from '@/public/img/follow-us-slider/is-24.avif';
import Slide25 from '@/public/img/follow-us-slider/is-25.avif';
// styles
import styles from './FollowUsSlider.module.scss';

export default function FollowUsSlider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slider__track}>
        <div className={styles.slider__inner}>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide25} alt="slide 15" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide10} alt="slide 10" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide11} alt="slide 11" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide9} alt="slide 9" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide23} alt="slide 13" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide24} alt="slide 14" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide12} alt="slide 12" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide16} alt="slide 16" />
          </div>
        </div>
        <div className={styles.slider__inner}>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide25} alt="slide 15" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide10} alt="slide 10" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide11} alt="slide 11" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide9} alt="slide 9" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide23} alt="slide 13" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide24} alt="slide 14" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim)}>
            <Image src={Slide12} alt="slide 12" />
          </div>
          <div className={clsx(styles.slider__inner__item, styles.slider__inner__item_slim_wide)}>
            <Image src={Slide16} alt="slide 16" />
          </div>
        </div>
      </div>
    </div>
  );
}
