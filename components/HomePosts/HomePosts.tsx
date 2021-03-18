import React from 'react';
/** Components */
import CustomLink from '@components/CustomLink';
import ThemeToggler from '@components/ThemeToggler';
/** Types */
import { PostMetadata } from '@customTypes/post';
/** Styles */
import styles from './HomePosts.module.scss';

type HomePostsProps = {
  posts: PostMetadata[];
};

const HomePosts = ({ posts }: HomePostsProps): JSX.Element => (
  <main className={styles.main}>
    <ThemeToggler />
    <h1 className={styles.mainTitle}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <h2 className={styles.postsTitle}>Posts</h2>

    <ul className={styles.posts}>
      {posts.map(({ id, date, title }) => (
        <li key={id} className={styles.post}>
          <CustomLink to={`/posts/${id}`} className={styles.postLink}>
            {title}
          </CustomLink>
          <br />
          <small>{date}</small>
        </li>
      ))}
    </ul>
  </main>
);

export default HomePosts;
