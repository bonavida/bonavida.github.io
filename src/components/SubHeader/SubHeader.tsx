import cx from 'classnames';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Components */
import ThemeToggler from '@components/ThemeToggler';
/** Styles */
import styles from './SubHeader.module.scss';

const SubHeader = (): JSX.Element => {
  const router = useRouter();
  const isPost = router.route.includes('/post/');

  const subHeaderClassNames = cx(styles.subHeader, {
    [styles.subHeaderRight]: !isPost,
  });

  const handleClick = () => {
    router.back();
  };

  return (
    <div className={subHeaderClassNames}>
      {isPost && (
        <button
          type="button"
          className={styles.backButton}
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon="chevron-left"
            className={styles.backButtonIcon}
          />
          <span>Back</span>
        </button>
      )}
      <ThemeToggler />
    </div>
  );
};

export default SubHeader;
