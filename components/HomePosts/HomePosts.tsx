import React from 'react';
import Link from 'next/link';
/** Components */
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

    <p>
      <b>Posts</b>
    </p>

    <ul>
      {posts.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>{date}</small>
        </li>
      ))}
    </ul>
  </main>
);

export default HomePosts;
