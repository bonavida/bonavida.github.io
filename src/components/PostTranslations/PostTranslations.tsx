/** Components */
import CustomLink from '@components/CustomLink';
/** Constants */
import { constants } from '@constants/index';
/** Styles */
import styles from './PostTranslations.module.scss';

interface PostTranslationsProps {
  id: string;
  lang: string;
  otherLangs: string[];
}

const PostTranslations = ({
  id,
  lang,
  otherLangs,
}: PostTranslationsProps): JSX.Element => (
  <div className={styles.translatedPosts}>
    {lang === constants.DEFAULT_LANG ? (
      <>
        <span className={styles.translatedPostsText}>
          This post has been translated into:
        </span>
        {otherLangs.map((otherLang) => (
          <CustomLink
            to={`/posts/${otherLang}/${id}`}
            className={styles.translatedPostLink}
          >
            {constants.SUPPORTED_LANGS[otherLang]}
          </CustomLink>
        ))}
      </>
    ) : (
      <>
        <span className={styles.translatedPostsText}>
          Read the original post
        </span>
        <CustomLink to={`/posts/${id}`} className={styles.translatedPostLink}>
          here
        </CustomLink>
        .
      </>
    )}
  </div>
);

export default PostTranslations;
