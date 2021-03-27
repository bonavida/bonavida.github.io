import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
      <title>Diego Bonavida</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <main className="home">
      <div className="home__avatar">
        <img src="/avatar.jpg" alt="Diego Bonavida" />
      </div>
      <div className="home__content">
        <div className="home__author">
          <h1 className="home__name">Diego Bonavida</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            elementum sollicitudin lacinia. Nam pulvinar mi in risus ullamcorper
            sollicitudin. Nullam condimentum tortor tempus, malesuada sem ut,
            luctus tellus.
          </p>
          <p>
            Nullam lacinia elit nec arcu lacinia, vel posuere orci elementum.
            Maecenas felis nulla, aliquam in leo at, placerat lacinia velit.
          </p>
        </div>
        <HomePosts posts={posts} />
      </div>
    </main>

    <style jsx>{`
      .home {
        width: 100%;
      }
      .home__avatar {
        width: 110px;
        height: 110px;
        border: 3px solid var(--avatar-border);
        border-radius: 50%;
        padding: 8px;
        transition: all 0.2s linear;
      }

      .home__avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        overflow: hidden;
      }

      .home__content {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        transition: all 0.2s linear;
      }

      .home__author {
        display: flex;
        flex-direction: column;
      }

      .home__name {
        color: var(--text-primary);
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
      }

      p {
        color: var(--text-primary);
      }

      @media (min-width: 768px) {
        .home__avatar {
          width: 150px;
          height: 150px;
          border-width: 4px;
        }

        .home__content {
          margin-top: 48px;
        }
      }

      @media (min-width: 1024px) {
        .home__content {
          flex-direction: unset;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 48px;
        }
      }
    `}</style>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allPostsData = getSortedPostsData(locale);

  return {
    props: {
      posts: allPostsData,
      ...(await serverSideTranslations(locale, ['common', 'home', 'header'])),
    },
  };
};

export default Home;
