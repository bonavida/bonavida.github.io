/** Types */
import { AppProps } from 'next/app';
/** Components */
import Providers from '@components/Providers';
import Layout from '@components/Layout';
/** Utils and constants */
import { registerIcons } from '@utils/fontAwesome';
import Constants from '@constants/common';
/** Styles */
import '@styles/global.scss';

registerIcons();

function MyApp({
  Component,
  pageProps,
  router: { pathname },
}: AppProps): JSX.Element {
  return (
    <Providers>
      <Layout isErrorPage={pathname === Constants.ERROR_PAGE_PATHNAME}>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
