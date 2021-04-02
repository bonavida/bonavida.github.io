import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
/** Config */
import { allSocialMedia, SocialMediaParams } from './config';
/** Styles */
import styles from './SocialMedia.module.scss';

const SocialMedia = (): JSX.Element => (
  <div className={styles.socialMedia}>
    {allSocialMedia.map(({ id, url, icon }: SocialMediaParams) => {
      const classNames = cx(
        styles.socialMediaLink,
        styles[`${id}SocialMediaLink`]
      );

      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          key={id}
          className={classNames}
        >
          <FontAwesomeIcon icon={icon} className={styles.socialMediaIcon} />
        </a>
      );
    })}
  </div>
);

export default SocialMedia;
