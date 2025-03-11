import React from 'react';
import '../style/globals.css';
import { Metadata } from 'next';

import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
// import CartDrawer from '@/components/shared/CartDrawer/CartDrawer';
import GuestCartButton from '@/components/shared/GuestCartButton/GuestCartButton';

import { getCurrentSession } from '@/actions/auth';

export const metadata: Metadata = {
  title: 'Fasco Store',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getCurrentSession();

  console.log(user);
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <CartDrawer /> */}
        <GuestCartButton />
        <Footer />
      </body>
    </html>
  );
}
