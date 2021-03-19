import Head from 'next/head';
/** Components */
import HomePosts from '@components/HomePosts';
/** Types */
import { GetStaticProps } from 'next';
import { PostMetadata } from '@customTypes/post';
/** Services */
import { getSortedPostsData } from '@services/posts';

export type HomeProps = {
  posts: PostMetadata[];
};

const Home = ({ posts }: HomeProps): JSX.Element => (
  <div>
    <Head>
      <title>bonavida.dev</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <HomePosts posts={posts} />
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
