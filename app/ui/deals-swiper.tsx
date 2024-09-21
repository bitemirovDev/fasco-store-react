'use client';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Products } from '../interfaces';

const DealsSwiper = ({ data }: Products) => {
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
      {data.map((item, index) => (
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
  );
};

export default DealsSwiper;
