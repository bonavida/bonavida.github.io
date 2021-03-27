import Head from 'next/head';
/** Images */
import ErrorImage from '@public/404.webp';

const ErrorPage = (): JSX.Element => (
  <>
    <Head>
      <title>404 | Page not found</title>
    </Head>

    <main className="error">
      <div className="error__background" />
      <div className="error__wrapper">
        <span className="error__status">404</span>
        <p className="error__text">This is not the page you are looking for.</p>
      </div>
    </main>

    <style jsx>{`
      .error {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #101827;
      }
      .error__background {
        width: 100%;
        height: 100%;
        background: url(${ErrorImage}) 50% no-repeat;
        background-size: cover;
        opacity: 0.6;
      }
      .error__wrapper {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .error__status {
        color: #fbfbfc;
        font-size: 148px;
        font-weight: bold;
      }
      .error__text {
        max-width: 900px;
        color: #fbfbfc;
        font-size: 48px;
        margin: 0;
        text-align: center;
      }
    `}</style>
  </>
);

export default ErrorPage;
