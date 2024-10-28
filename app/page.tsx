import React from 'react';
import Sale from '@/components/shared/sections/sale/Sale';
import Logos from '@/components/shared/sections/logos/Logos';
import Deals from '@/components/shared/sections/deals/Deals';
import NewArrivals from '@/components/shared/sections/arrivals/NewArrivals';
import Features from '@/components/shared/sections/features/Features';
import Customers from '@/components/shared/sections/customers/Customers';
import Subscribe from '@/components/shared/sections/subscribe/Subscribe';

const dealsProps = {
  title: 'Deals Of The Month',
  desc: 'Discover the best deals of the month! Enjoy discounts on popular products you don’t want to miss. Find the perfect items at great prices and upgrade your wardrobe with unbeatable savings.',
};

export default function Home() {
  return (
    <>
      <Sale />
      <Logos />
      <Deals title={dealsProps.title} description={dealsProps.desc} />
      <NewArrivals />
      <Features />
      <Customers />
      <Subscribe />
    </>
  );
}
