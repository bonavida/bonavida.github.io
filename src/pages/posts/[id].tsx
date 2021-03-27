import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
/** Services */
import { getAllPostIds, getPostData } from '@services/posts';
/** Types */
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostParams } from '@customTypes/post';
/** Utils */
import { getFormattedDate } from '@utils/date';

const PostTemplate = ({ content, date, title }: Post): JSX.Element => (
  <>
    <Head>
      <title>{title} | Diego Bonavida</title>
    </Head>

    <header className="post__header">
      <h1 className="post__title">{title}</h1>
    </header>
    <main className="post__content">
      <span className="post__date">{getFormattedDate(date)}</span>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>

    <style jsx>{`
      p {
        line-height: 28px;
      }

      a {
        font-weight: 600;
      }

      .post__header {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        text-align: center;
      }

      .post__date {
        display: block;
        margin: 30px 0 40px;
        font-size: 14px;
        color: #8aa0a0;
      }

      .post__title {
        color: var(--text-primary);
        font-size: 42px;
        line-height: 45px;
        transition: all 0.2s linear;
      }

      .post__content {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        color: var(--text-primary);
        transition: all 0.2s linear;
      }
    `}</style>
  </>
);

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllPostIds(locales);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
  locale,
}: PostParams) => {
  const postData = await getPostData(id, locale);

  return {
    props: {
      ...postData,
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
};

export default PostTemplate;
