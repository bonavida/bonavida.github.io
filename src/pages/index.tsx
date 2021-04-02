import Head from 'next/head';
import Link from 'next/link';
/** Components */
import HomePosts from '@components/HomePosts';
import SocialMedia from '@components/SocialMedia';
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
    </Head>

    <main className="home">
      <div className="home__avatar">
        <img src="/avatar.jpg" alt="Diego Bonavida" />
      </div>
      <div className="home__content">
        <div className="home__author">
          <h1 className="home__name">Diego Bonavida</h1>
          <section>
            <p>
              Hey, I&apos;m Diego and I&apos;m a frontend developer. I&apos;ve
              built this small place just so I can post about things I find
              interesting and some other discoveries I make.
            </p>
            <p>
              My interests in software are JavaScript, TypeScript, React,
              Next.js & Vue, among others.
            </p>
          </section>
          <section>
            <Link href="/about">
              <a className="home__about">Learn more about me</a>
            </Link>
          </section>
          <section>
            <SocialMedia />
          </section>
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
        transition: all 0.2s linear;
      }

      .home__about {
        font-weight: 500;
        line-height: 1.2em;
      }

      .home__about::after {
        content: '→';
        margin-left: 8px;
        vertical-align: middle;
        transition: all 0.3s ease;
      }

      .home__about:hover::after {
        margin-left: 10px;
      }

      section:not(:first-of-type) {
        margin-top: 20px;
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Home;
