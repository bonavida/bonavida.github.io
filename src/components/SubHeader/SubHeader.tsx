import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
/** Components */
import CustomLink from '@components/CustomLink';
import ThemeToggler from '@components/ThemeToggler';
/** Styles */
import styles from './SubHeader.module.scss';

const SubHeader = (): JSX.Element => {
  const { asPath, locale: currentLocale, locales } = useRouter();
  const { t } = useTranslation('common');

  return (
    <div className={styles.subHeader}>
      <div className={styles.languages}>
        {locales.map((locale) => (
          <CustomLink
            to={asPath}
            key={`lang_toggler_${locale}`}
            locale={locale}
            className={`${styles.languageLink} ${
              currentLocale === locale ? styles.languageLinkActive : ''
            }`}
          >
            {t(locale)}
          </CustomLink>
        ))}
      </div>
      <ThemeToggler />
    </div>
  );
};

export default SubHeader;
