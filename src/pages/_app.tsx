/** Types */
import { AppProps } from 'next/app';
/** Components */
import Providers from '@components/Providers';
import Layout from '@components/Layout';
/** Utils and constants */
import { registerIcons } from '@utils/fontAwesome';
import { constants } from '@constants/index';
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
      <Layout isErrorPage={pathname === constants.ERROR_PAGE_PATHNAME}>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
