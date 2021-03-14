import Head from 'next/head';
import Link from 'next/link';
/** Types */
import { GetStaticProps } from 'next';
import { PostMetadata } from '@customTypes/post';
/** Services */
import { getSortedPostsData } from '@services/posts';

export type HomeProps = {
  posts: PostMetadata[];
};

export const Home = ({ posts }: HomeProps): JSX.Element => (
  <div>
    <Head>
      <title>bonavida.dev</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <main>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p>
        Get started by editing <code>pages/index.js</code>
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

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/vercel.svg" alt="Vercel Logo" />
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
