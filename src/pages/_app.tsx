/** Types */
import { AppProps } from 'next/app';
/** Components */
import Providers from '@components/Providers';
import Layout from '@components/Layout';
/** Utils */
import { registerIcons } from '@utils/fontAwesome';
/** Styles */
import '@styles/global.scss';

registerIcons();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
