import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

import { ProvideTheme } from '../components/ThemeContext';

import '@/styles/globals.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideTheme>
      <CssBaseline />
      <Component {...pageProps} />
    </ProvideTheme>
  );
}
