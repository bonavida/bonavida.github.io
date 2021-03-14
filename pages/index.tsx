import Head from 'next/head';
import Link from 'next/link';
/** Types */
import { GetStaticProps } from 'next';
import { PostMetadata } from '@customTypes/post';
/** Services */
import { getSortedPostsData } from '@services/posts';
/** Styles */
import styles from '@styles/Home.module.css';

export type HomeProps = {
  posts: PostMetadata[];
};

export const Home = ({ posts }: HomeProps): JSX.Element => (
  <div className={styles.container}>
    <Head>
      <title>bonavida.dev</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
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

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
    </footer>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Home;
