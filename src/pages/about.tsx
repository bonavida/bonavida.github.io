import Head from 'next/head';
/** Components */
import TopTracks from '@components/TopTracks';
import CustomLink from '@components/CustomLink';
/** Types */
import { GetStaticProps } from 'next';
import { Track } from '@customTypes/lastfm';
import { fetchTopTracks } from '@services/tracks';

interface AboutProps {
  tracks: Track[];
}

const About = ({ tracks }: AboutProps): JSX.Element => (
  <div>
    <Head>
      <title>Diego Bonavida</title>
      <link rel="icon" href="/favicon.ico?v=1" />
    </Head>

    <main className="about">
      <div className="about__avatar">
        <img src="/img/avatar.jpg" alt="Diego Bonavida" />
      </div>
      <div className="about__content">
        <h1 className="about__name">Diego Bonavida</h1>
        <section>
          <p>
            Hey, I&apos;m Diego and I&apos;m a frontend developer. I&apos;ve
            built this small place just so I can post about things I find
            interesting and some other discoveries I make.
          </p>
          <p>
            My interests in software are JavaScript, TypeScript, React, Next.js
            & Vue, among others.
          </p>
        </section>
        <div className="separator" />
        <section>
          <p>
            If you want to know more about me,{' '}
            <CustomLink to="/posts">these are the posts</CustomLink> that
            I&apos;ve been publishing here, and{' '}
            <CustomLink to="/projects">these are the projects</CustomLink>{' '}
            I&apos;ve been working on.
          </p>
          <p>
            Bonus! If you&apos;re even more curious about what I&apos;ve been
            listening this week the most, here you have:
          </p>
        </section>
        <TopTracks tracks={tracks} />
      </div>
    </main>

    <style jsx>{`
      .about {
        width: 100%;
        max-width: 700px;
        margin: 0px auto 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .about__avatar {
        width: 125px;
        height: 125px;
        border: 3px solid var(--avatar-border);
        border-radius: 50%;
        padding: 8px;
        transition: border-color 0.2s linear;
      }

      .about__avatar img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        overflow: hidden;
      }

      .about__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        transition: margin-top 0.2s linear;
      }

      .about__name {
        color: var(--text-primary);
        font-size: 36px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        margin-bottom: 30px;
        transition: color 0.2s linear;
      }

      p {
        color: var(--text-primary);
        transition: all 0.2s linear;
      }

      section {
        margin-bottom: 25px;
      }

      .separator {
        margin: 10px auto;
        width: 100%;
        max-width: 50%;
        height: 1px;
        background-color: var(--separator-color);
        transition: background-color 0.2s linear;
      }

      @media (min-width: 768px) {
        .about__avatar {
          width: 175px;
          height: 175px;
          border-width: 4px;
        }

        .about__content {
          margin-top: 48px;
        }
      }
    `}</style>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'Diego Bonavida',
    description:
      // eslint-disable-next-line max-len
      "Hey, I'm Diego and I'm a frontend developer. I've built this small place just so I can post about things I find interesting and some other discoveries I make.",
  };

  const tracks = (await fetchTopTracks()) ?? [];

  return {
    props: {
      meta,
      tracks,
    },
  };
};

export default About;
