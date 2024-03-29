import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Components */
import CustomLink from '@components/CustomLink';
/** Types */
import { PostMetadata } from '@customTypes/post';
/** Utils */
import { getFormattedDate } from '@utils/date';
/** Styles */
import styles from './HomePosts.module.scss';

type HomePostsProps = {
  posts: PostMetadata[];
};

const HomePosts = ({ posts }: HomePostsProps): JSX.Element => (
  <main className={styles.postsContainer}>
    <h2 className={styles.postsTitle}>Posts</h2>
    <ul className={styles.posts}>
      {posts.map(({ id, date, title, readingTime }) => (
        <li key={id} className={styles.post}>
          <CustomLink to={`/post/${id}`} className={styles.postLink}>
            {title}
          </CustomLink>
          <div className={styles.postMetadata}>
            <small className={styles.postDate}>
              {getFormattedDate({ date })}
            </small>
            <div className={styles.postReadingTime}>
              <FontAwesomeIcon
                icon="glasses"
                className={styles.postReadingTimeIcon}
              />
              <small className={styles.postReadingTimeText}>
                {readingTime}
              </small>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default HomePosts;
