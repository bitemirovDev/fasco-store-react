import React from 'react';
import Header from './ui/header';
import Sale from './ui/sale';
import Logos from './ui/logos';
import Deals from './ui/deals';
import NewArrivals from './ui/newArrivals/new-arrivals';

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
    </div>
  );
}
