// import Image from 'next/image';
import DealsSwiper from './deals-swiper';
import Timer from './timer';
import { Title } from '../interfaces';
import { Button, PrevSlideButton, NextSlideButton } from './button';
import products from '../../data/products.json';

export default function Deals({ title, description }: Title) {
  const endDate = new Date('2024-10-01Z15:30');

  const dealsProducts = products.filter((item) => item.deals);

  return (
    <section className="deals">
      <div className="container-right">
        <div className="deals__left">
          <div className="deals__text">
            <h3 className="deals__title headline-2">{title}</h3>
            <p className="deals__desc">{description}</p>
            <div className="deals__btn">
              <Button className="btn--medium">Buy Now</Button>
            </div>
          </div>
          <Timer title="Hurry, Before It’s Too Late!" endDate={endDate} />
        </div>

        <div className="deals__right">
          <DealsSwiper data={dealsProducts} />
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
        </div>
      </div>
    </section>
  );
}
