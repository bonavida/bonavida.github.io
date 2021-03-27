/** Components */
import Header from '@components/Header';
import SubHeader from '@components/SubHeader';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <SubHeader />
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
