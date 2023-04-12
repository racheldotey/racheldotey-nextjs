import * as React from 'react';
import { Metadata } from 'next';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import './globals.css';

export const metadata: Metadata = {
  title: 'Web & App Development | RachelDotey.ninja',
  description: 'Web & App Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader />

        {children}

        <AppFooter />
      </body>
    </html>
  );
}
