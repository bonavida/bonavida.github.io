import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Components */
import CustomLink from '@components/CustomLink';
/** Types */
import { GetStaticProps } from 'next';
import { PostMetadata } from '@customTypes/post';
/** Services */
import { getSortedPostsData } from '@services/posts';
/** Utils */
import { getFormattedDate } from '@utils/date';

export type PostsProps = {
  posts: PostMetadata[];
};

const Home = ({ posts }: PostsProps): JSX.Element => (
  <div>
    <Head>
      <title>Posts | Diego Bonavida</title>
    </Head>

    <main className="posts">
      <h1 className="posts__title">Posts</h1>
      <section>
        <ul className="posts__posts">
          {posts.map(({ id, date, title, readingTime }) => (
            <li key={id} className="post">
              <CustomLink to={`/post/${id}`} className="post__link">
                <span className="post__link">{title}</span>
              </CustomLink>
              <div className="post__metadata">
                <small className="post__date">
                  {getFormattedDate({ date })}
                </small>
                <div className="post__reading-time">
                  <FontAwesomeIcon
                    icon="glasses"
                    className="post__reading-time-icon"
                  />
                  <small className="post__reading-time-text">
                    {readingTime}
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>

    <style jsx global>
      {`
        .post__reading-time-icon {
          color: var(--text-secondary);
          font-size: 11px;
          transition: color 0.2s linear;
        }

        @media (min-width: 768px) {
          .post__reading-time-icon {
            font-size: 12px;
          }
        }
      `}
    </style>
    <style jsx>{`
      .posts {
        width: 100%;
        max-width: 1000px;
        margin: 0px auto 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .posts__title {
        margin-top: 0;
        margin-bottom: 30px;
        font-size: 36px;
        color: var(--text-primary);
        transition: color 0.2s linear;
      }

      .posts__posts {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        row-gap: 1.75em;
        transition: all 0.2s linear;
      }

      .post {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
        transition: margin-bottom 0.2s linear;
      }

      .post__link {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.2;
        transition: font-size 0.2s linear;
      }

      .post__metadata {
        display: flex;
        align-items: center;
        column-gap: 8px;
      }

      .post__reading-time {
        display: flex;
        align-items: center;
        column-gap: 8px;
      }

      .post__reading-time:before {
        content: '·';
        color: var(--text-secondary);
        font-size: 12px;
        transition: color 0.2s linear;
      }

      .post__date {
        color: var(--text-terciary);
        font-size: 12px;
        transition: color 0.2s linear;
      }

      .post__reading-time-text {
        color: var(--text-secondary);
        font-size: 12px;
        transition: color 0.2s linear;
      }

      @media (min-width: 768px) {
        .post__link {
          font-size: 24px;
        }

        .post__date,
        .post__reading-time-text {
          font-size: 14px;
        }
      }
    `}</style>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const meta = {
    title: 'Diego Bonavida',
    description:
      // eslint-disable-next-line max-len
      "Hey, I'm Diego and I'm a frontend developer. I've built this small place just so I can post about things I find interesting and some other discoveries I make.",
  };

  return {
    props: {
      meta,
      posts: allPostsData,
    },
  };
};

export default Home;
