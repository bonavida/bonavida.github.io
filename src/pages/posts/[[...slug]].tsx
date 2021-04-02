import { useEffect, useState } from 'react';
import Head from 'next/head';
/** Components */
import PostTranslations from '@components/PostTranslations';
/** Services */
import { getAllPostIds, getPostData } from '@services/posts';
/** Types */
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostParams } from '@customTypes/post';
/** Utils */
import { getFormattedDate } from '@utils/date';

const PostTemplate = ({
  id,
  content,
  date,
  title,
  lang,
  otherLangs,
}: Post): JSX.Element => {
  const [isMounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Diego Bonavida</title>
      </Head>

      <main className="post__content">
        <h1 className="post__title">{title}</h1>
        {isMounted && (
          <span className="post__date">{getFormattedDate({ date, lang })}</span>
        )}
        <PostTranslations id={id} lang={lang} otherLangs={otherLangs} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <style jsx>{`
        .post__date {
          display: block;
          margin: 20px 0 40px;
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
          max-width: 900px;
          margin: 0 auto;
          color: var(--text-primary);
          transition: all 0.2s linear;
        }
      `}</style>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: PostParams) => {
  // The slug param can have one or two parameters.
  // One parameter -> [id]
  // Two parameters -> [slug, id]
  // We need to destructure the array in a specific way to get each parameter right
  const [lang, id] = slug.length === 1 ? [undefined, slug[0]] : slug;

  const postData = await getPostData(lang, id);

  return {
    props: {
      ...postData,
    },
  };
};

export default PostTemplate;
