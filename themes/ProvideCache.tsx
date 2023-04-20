import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';

// Client-side cache, shared for the whole session of the user in the browser.
// See https://medium.com/frontendweb/how-to-use-material-ui-with-nextjs-and-react-18-6c054ceacf77
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

interface CacheProps extends React.PropsWithChildren {
  emotionCache?: EmotionCache;
}

export const ProvideCache = (props: CacheProps) => {
  const { children, emotionCache = clientSideEmotionCache } = props;

  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};
