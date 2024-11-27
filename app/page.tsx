import React from 'react';
import {
  NewArrivalsSection,
  DealsSection,
  FeaturesSection,
  LogosSection,
  SaleSection,
  SubscribeSection,
  CustomersSection,
} from '@/components/sections';

export default function Home() {
  const dealsProps = {
    title: 'Deals Of The Month',
    desc: 'Discover the best deals of the month! Enjoy discounts on popular products you don’t want to miss. Find the perfect items at great prices and upgrade your wardrobe with unbeatable savings.',
  };

  return (
    <>
      <SaleSection />
      <LogosSection />
      <DealsSection title={dealsProps.title} description={dealsProps.desc} />
      <NewArrivalsSection />
      <FeaturesSection />
      <CustomersSection />
      <SubscribeSection />
    </>
  );
}
