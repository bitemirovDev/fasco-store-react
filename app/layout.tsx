import React from 'react';
import './style/globals.css';
import { Metadata } from 'next';
import { SkeletonTheme } from 'react-loading-skeleton';

import Header from '@/components/shared/header/Header';
import Footer from '@/components/shared/footer/Footer';

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
        <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
          <Header />
          {children}
          <Footer />
        </SkeletonTheme>
      </body>
    </html>
  );
}
