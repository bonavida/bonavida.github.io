import React from 'react';
/** Components */
import Header from '@components/Header';
import ThemeToggler from '@components/ThemeToggler';
/** Styles */
import styles from './Layout.module.scss';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <ThemeToggler />
    <div className={styles.content}>{children}</div>
  </>
);

export default Layout;
