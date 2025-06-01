import React from 'react';
import './style/tailwind.css';
import './style/globals.scss';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import CartSync from '@/components/layout/CartSync';

export const metadata: Metadata = {
  title: 'Fasco Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CartSync />
        <NextTopLoader />
      </body>
    </html>
  );
}
