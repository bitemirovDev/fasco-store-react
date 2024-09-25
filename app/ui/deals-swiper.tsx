'use client';
import React from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { ProductsProps } from '@/app/interfaces';
import { PrevSlideButton, NextSlideButton } from './button';

const DealsSwiper = ({ products }: ProductsProps) => {
  return (
    <Swiper
      className="deals-swiper"
      spaceBetween={24}
      slidesPerView={3}
      speed={500}
      autoplay={true}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ clickable: true, el: '.deals__swiper-pagination' }}
      navigation={{
        nextEl: '.deals__swiper-buttons .next__btn',
        prevEl: '.deals__swiper-buttons .prev__btn',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
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

      <div className="deals__swiper-pagination"></div>
      <div className="deals__swiper-buttons">
        <PrevSlideButton className="prev__btn">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.00018 1L8.00018 8L1.00019 15"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </PrevSlideButton>
        <NextSlideButton className="next__btn">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.00018 1L8.00018 8L1.00019 15"
              stroke="black"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NextSlideButton>
      </div>
    </Swiper>
  );
};

export default DealsSwiper;
