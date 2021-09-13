/** Components */
import ActiveLink from '@components/ActiveLink';
/** Styles */
import styles from './Header.module.scss';

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.headerMenu}>
      <div className={styles.headerMenuItem}>
        <ActiveLink
          to="/"
          className={styles.headerMenuItemLink}
          activeClassName={styles.headerMenuItemLinkActive}
        >
          Home
        </ActiveLink>
      </div>
      <div className={styles.headerMenuItem}>
        <ActiveLink
          to="/about"
          className={styles.headerMenuItemLink}
          activeClassName={styles.headerMenuItemLinkActive}
        >
          About
        </ActiveLink>
      </div>
      <div className={styles.headerMenuItem}>
        <ActiveLink
          to="/posts"
          className={styles.headerMenuItemLink}
          activeClassName={styles.headerMenuItemLinkActive}
        >
          Posts
        </ActiveLink>
      </div>
      <div className={styles.headerMenuItem}>
        <ActiveLink
          to="/projects"
          className={styles.headerMenuItemLink}
          activeClassName={styles.headerMenuItemLinkActive}
        >
          Projects
        </ActiveLink>
      </div>
    </div>
  </div>
);

export default Header;
