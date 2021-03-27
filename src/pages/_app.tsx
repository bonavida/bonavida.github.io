import { appWithTranslation } from 'next-i18next';
/** Types */
import { AppProps } from 'next/app';
/** Components */
import Providers from '@components/Providers';
import Layout from '@components/Layout';
/** Utils */
import { registerIcons } from '@utils/fontAwesome';
/** Config */
import nextI18NextConfig from '../../next-i18next.config.js';
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

export default appWithTranslation(MyApp, nextI18NextConfig);
