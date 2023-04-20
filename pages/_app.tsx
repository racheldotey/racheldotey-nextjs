import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { ProvideCache } from '../themes/ProvideCache';
import { ProvideTheme } from '../themes/ProvideTheme';
import { AppLayout } from '../components/app-layout/AppLayout';

import '@/styles/globals.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideCache>
      <Head>
        <title>RachelDotey.ninja</title>
        <meta name="description" content="Web & App Development" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.png" />
        <link type="text/plain" rel="author" href="/humans.txt" />
      </Head>
      <ProvideTheme>
        <CssBaseline />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ProvideTheme>
    </ProvideCache>
  );
}
