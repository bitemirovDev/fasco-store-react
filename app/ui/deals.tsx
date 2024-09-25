import React from 'react';
import Timer from './timer';
import { Title } from '@/app/interfaces';
import { Button } from './button';
import products from '@/data/products.json';
import PromoCarousel from './promoCarousel/promo-carousel';

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
          <PromoCarousel products={dealsProducts} />
        </div>
      </div>
    </section>
  );
}
