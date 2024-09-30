'use client';
import React from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PoromoCarousel } from '@/app/interfaces';
import { NextSlideButton, PrevSlideButton } from '../../../../../components/ui/button';
import DealsCard from '../card/DealsCard';

import styles from './deals-carousel.module.scss';

export default function DealsCarousel({ data, parentClass }: PoromoCarousel) {
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
        {/* Выводим карточки */}
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className={styles['swiper-slide']}>
            <DealsCard item={item} index={index} />
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
