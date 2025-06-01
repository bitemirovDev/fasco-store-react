import React from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import CartDrawer from '@/components/shared/CartDrawer/CartDrawer';
import GuestCartButton from '@/components/shared/GuestCartButton/GuestCartButton';
import { auth } from '@/auth';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  console.log(session);

  return (
    <>
      <Header session={session} />
      {children}
      <CartDrawer />
      <GuestCartButton />
      <Footer />
    </>
  );
}
