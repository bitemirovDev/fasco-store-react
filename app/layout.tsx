import React from 'react';
import './style/tailwind.css';
import './style/globals.scss';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader />
      </body>
    </html>
  );
}
