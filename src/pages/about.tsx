import Head from 'next/head';
/** Components */
import TopTracks from '@components/TopTracks';
/** Services */
import { getAllTracksInfo, getTopTracks } from '@services/lastfm';
/** Utils */
import { getLargestImage } from '@utils/lastfm';
import { hasReachedAWeek } from '@utils/date';
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
        <img src="/avatar.jpg" alt="Diego Bonavida" />
      </div>
      <div className="about__content">
        <h1 className="about__name">Diego Bonavida</h1>
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
