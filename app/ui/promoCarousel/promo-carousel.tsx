'use client';
import React from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductsProps } from '@/app/interfaces';
import { NextSlideButton, PrevSlideButton } from '../button';
import SVGIcon from '../svg';
import Image from 'next/image';
import styles from '@/app/style/modules/_promo-carousel.module.scss';

// icons
import Arrow from '@/public/img/icons/arrow_left.svg';

export default function PromoCarousel({ products }: ProductsProps) {
  return (
    <>
      <Swiper
        className={styles['promo-carousel']}
        spaceBetween={24}
        slidesPerView={3}
        speed={500}
        autoplay={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: `.${styles['promo-carousel-pagination']}` }}
        navigation={{
          nextEl: `.${styles['promo-carousel-buttons--next']}`,
          prevEl: `.${styles['promo-carousel-buttons--prev']}`,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {/* Выводим карточки */}
        {products.map((item, index) => (
          <SwiperSlide key={item.id}>
            <article className="deals-card">
              <div className="deals-card__image">
                <Image fill src={`/img/products/${item.img}`} alt={`${item.img}`} />
              </div>
              <div className="deals-card__text">
                <div className="deals-card__title">
                  0{index + 1} - {item.sale?.title}
                </div>
                <div className="deals-card__discount">{item.sale?.discount}</div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles['promo-carousel-pagination']}></div>
      <div className={styles['promo-carousel-buttons']}>
        <PrevSlideButton
          className={`swiper-btn swiper-btn--prev ${styles['promo-carousel-buttons--prev']}`}>
          <SVGIcon width={9} height={16} fill="none" icon={Arrow} />
        </PrevSlideButton>
        <NextSlideButton
          className={`swiper-btn swiper-btn--next ${styles['promo-carousel-buttons--next']}`}>
          <SVGIcon width={9} height={16} fill="none" icon={Arrow} />
        </NextSlideButton>
      </div>
    </>
  );
}
