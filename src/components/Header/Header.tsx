import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
/** Components */
import ActiveLink from '@components/ActiveLink';
/** Styles */
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const { locale } = useRouter();
  const { t } = useTranslation('header');

  return (
    <div className={styles.header}>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/"
            locale={locale}
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
          >
            {t('home')}
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/about"
            locale={locale}
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
          >
            {t('about')}
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/projects"
            locale={locale}
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
          >
            {t('projects')}
          </ActiveLink>
        </div>
        <div className={styles.headerMenuItem}>
          <ActiveLink
            to="/setup"
            locale={locale}
            className={styles.headerMenuItemLink}
            activeClassName={styles.headerMenuItemLinkActive}
          >
            {t('setup')}
          </ActiveLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
