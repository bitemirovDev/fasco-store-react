'use client';
import React from 'react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PrevSlideButton, NextSlideButton } from '@/components/ui/Button';
import { CustomerReview } from '@prisma/client';
// components
import CustomerCard from '../CustomersCard/CustomerCard';

import styles from './CustomerCarousel.module.scss';

type CustomersCarouselProps = {
  data: CustomerReview[];
  parentClass: string;
};

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
        {data.map((item, index) => (
          <SwiperSlide key={index}>
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
