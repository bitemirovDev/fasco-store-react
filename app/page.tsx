import React from 'react';
import Sale from '@/components/shared/sale/Sale';
import Logos from '@/components/shared/logos/Logos';
import Deals from '@/components/shared/deals/Deals';
import NewArrivals from '@/components/shared/arrivals/NewArrivals';
import Features from '@/components/shared/features/Features';
import Customers from '@/components/shared/customers/Customers';
import Subscribe from '@/components/shared/subscribe/Subscribe';

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
