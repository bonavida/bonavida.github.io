import cx from 'classnames';
/** Components */
import Header from '@components/Header';
import SubHeader from '@components/SubHeader';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  isErrorPage: boolean;
  children: JSX.Element;
};

const Layout = ({ isErrorPage, children }: LayoutProps): JSX.Element => {
  const classNames = cx(styles.content, {
    [styles.contentError]: isErrorPage,
  });

  return (
    <>
      <Header />
      {!isErrorPage && <SubHeader />}
      <div className={classNames}>{children}</div>
    </>
  );
};

export default Layout;
