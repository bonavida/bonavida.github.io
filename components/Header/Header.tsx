import React from 'react';
import Link from 'next/link';
/** Styles */
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.headerMenu}>
      <div className={styles.headerMenuItem}>
        <Link href="/">
          <a className={styles.headerMenuItemLink}>Home</a>
        </Link>
      </div>
      <div className={styles.headerMenuItem}>
        <Link href="/about">
          <a className={styles.headerMenuItemLink}>About</a>
        </Link>
      </div>
      <div className={styles.headerMenuItem}>
        <Link href="/projects">
          <a className={styles.headerMenuItemLink}>Projects</a>
        </Link>
      </div>
      <div className={styles.headerMenuItem}>
        <Link href="/setup">
          <a className={styles.headerMenuItemLink}>Setup</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
