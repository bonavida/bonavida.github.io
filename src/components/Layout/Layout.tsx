/** Components */
import Header from '@components/Header';
import SubHeader from '@components/SubHeader';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  isErrorPage: boolean;
  children: JSX.Element;
};

const Layout = ({ isErrorPage, children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    {!isErrorPage && <SubHeader />}
    <div
      className={`${styles.content} ${isErrorPage ? styles.contentError : ''}`}
    >
      {children}
    </div>
  </>
);

export default Layout;
