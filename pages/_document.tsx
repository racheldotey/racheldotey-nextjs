import { Html, Head, Main, NextScript } from 'next/document';

/**
 * This file is only rendered on the server,
 * so event handlers like onClick cannot be used in _document.
 * @see https://nextjs.org/docs/advanced-features/custom-document
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
