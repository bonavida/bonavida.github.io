/** Types */
import { AppProps } from 'next/app';
/** Components */
import Providers from '@components/Providers';
/** Styles */
import '@styles/global.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
