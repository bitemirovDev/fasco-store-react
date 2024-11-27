import React from 'react';
import './style/globals.css';
import { Metadata } from 'next';

import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
