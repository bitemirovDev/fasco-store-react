'use client';
import React from 'react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomerCard from '../card/CustomerCard';
import { CustomersCarouselProps } from '@/app/interfaces';
import { PrevSlideButton, NextSlideButton } from '@/components/ui/button';

import styles from './customer-carousel.module.scss';

const CustomersCarousel = ({ data, parentClass }: CustomersCarouselProps) => {
  return (
    <>
      <Swiper
        className={styles.carousel}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        slidesPerView={'auto'}
        initialSlide={2}
        preventClicks
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 500,
          depth: 1000,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        autoplay
        grabCursor
        centeredSlides
        speed={500}
        navigation={{
          nextEl: `.${parentClass} .swiper-btn--next`,
          prevEl: `.${parentClass} .swiper-btn--prev`,
        }}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CustomerCard customer={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.btns}>
        <PrevSlideButton />
        <NextSlideButton />
      </div>
    </>
  );
};

export default CustomersCarousel;
