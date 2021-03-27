import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
/** Types */
import { GetStaticProps } from 'next';

const ErrorPage = (): JSX.Element => (
  <>
    <Head>
      <title>404 | Page not found</title>
    </Head>

    <main className="error">
      <div className="error__wrapper">
        <span className="error__status">404</span>
      </div>
    </main>

    <style jsx>{`
      .error {
        position: relative;
        height: calc(100vh - 120px);
      }

      .error__wrapper {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .error__status {
        color: var(--text-primary);
        font-size: 124px;
        font-weight: bold;
        transition: all 0.2s linear;
      }
    `}</style>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
});

export default ErrorPage;
