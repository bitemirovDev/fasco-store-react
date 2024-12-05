import React from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextSlideButton, PrevSlideButton } from '@/components/ui/Button';
import DealsCard from '../DealsCard/DealsCard';
import { ProductWithRelations } from '@/types/product';
import styles from './DealsCarousel.module.scss';

interface PromoCarouselProps {
  data: ProductWithRelations[];
  parentClass?: string;
}

export default function DealsCarousel({ data, parentClass }: PromoCarouselProps) {
  return (
    <>
      <Swiper
        className={styles.carousel}
        spaceBetween={24}
        slidesPerView={3}
        speed={500}
        autoplay={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: `.${styles.pagination}` }}
        navigation={{
          nextEl: `.${parentClass} .swiper-btn--next`,
          prevEl: `.${parentClass} .swiper-btn--prev`,
        }}>
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className={styles['swiper-slide']}>
            <DealsCard img={item.img} discount={item.discount} id={item.id} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.pagination}></div>
      <div className={styles.buttons}>
        <PrevSlideButton />
        <NextSlideButton />
      </div>
    </>
  );
}
