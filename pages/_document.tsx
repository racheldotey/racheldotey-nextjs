import { Html, Head, Main, NextScript } from 'next/document'
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <AppHeader />
        <Main />
        <AppFooter />
        <NextScript />
      </body>
    </Html>
  );
}
