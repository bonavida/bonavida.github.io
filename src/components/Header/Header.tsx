import { useState } from 'react';
import cx from 'classnames';
/** Components */
import ActiveLink from '@components/ActiveLink';
import HamburgerIcon from '@components/HamburgerIcon';
/** Styles */
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClassNames = cx(styles.header, {
    [styles.headerMenuOpen]: isMenuOpen,
  });

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={headerClassNames}>
      <HamburgerIcon onToggle={handleToggleMenu} isMenuOpen={isMenuOpen} />
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/"
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
            onClick={handleToggleMenu}
          >
            Home
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/about"
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
            onClick={handleToggleMenu}
          >
            About
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/posts"
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
            onClick={handleToggleMenu}
          >
            Posts
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/projects"
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
            onClick={handleToggleMenu}
          >
            Projects
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
