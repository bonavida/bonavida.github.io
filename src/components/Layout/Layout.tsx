import cx from 'classnames';
/** Components */
import Meta from '@components/Meta';
import Header from '@components/Header';
import SubHeader from '@components/SubHeader';
/** Types */
import { MetaProps } from '@customTypes/meta';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  meta: MetaProps;
  isErrorPage: boolean;
  children: JSX.Element;
};

const Layout = ({ meta, isErrorPage, children }: LayoutProps): JSX.Element => {
  const classNames = cx(styles.content, {
    [styles.contentError]: isErrorPage,
  });

  return (
    <>
      <Meta {...meta} />
      <Header />
      {!isErrorPage && <SubHeader />}
      <div className={classNames}>{children}</div>
    </>
  );
};

export default Layout;
