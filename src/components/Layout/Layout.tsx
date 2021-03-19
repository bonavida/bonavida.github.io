import React from 'react';
/** Components */
import Header from '@components/Header';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
