import React from 'react';
import Header from './ui/components/header/Header';
import Sale from './ui/components/sale/Sale';
import Logos from './ui/components/logos/Logos';
import Deals from './ui/components/deals/Deals';
import NewArrivals from './ui/components/arrivals/NewArrivals';
import Features from './ui/components/features/Features';
import Customers from './ui/components/customers/Customers';
import Subscribe from './ui/components/subscribe/Subscribe';
import Footer from './ui/components/footer/Footer';

export default function Home() {
  const dealsDesc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin ';
  return (
    <div>
      <Header />
      <Sale />
      <Logos />
      <Deals title="Deals Of The Month" description={dealsDesc} />
      <NewArrivals />
      <Features />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  );
}
