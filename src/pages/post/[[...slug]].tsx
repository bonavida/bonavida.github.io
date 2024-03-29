import { useEffect, useState } from 'react';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
/** Components */
import PostTranslations from '@components/PostTranslations';
/** Services */
import { getAllPathsFromPosts, getPostData } from '@services/posts';
/** Types */
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostPath } from '@customTypes/post';
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
        {!!otherLangs?.length && (
          <PostTranslations id={id} lang={lang} otherLangs={otherLangs} />
        )}
        <MDXRemote {...content} />
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
          font-size: 24px;
          line-height: 34px;
          transition: color 0.2s linear;
        }

        .post__content {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          color: var(--text-primary);
          transition: color 0.2s linear;
        }

        @media (min-width: 480px) {
          .post__title {
            font-size: 36px;
            line-height: 40px;
          }
        }

        @media (min-width: 768px) {
          .post__title {
            font-size: 42px;
            line-height: 45px;
          }
        }
      `}</style>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPathsFromPosts();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { slug },
}: PostPath) => {
  // The slug param can have one or two parameters.
  // One parameter -> [id]
  // Two parameters -> [slug, id]
  // We need to destructure the array in a specific way to get each parameter right
  const [lang, id] = slug.length === 1 ? [undefined, slug[0]] : slug;

  const { title, description, ...postData } = await getPostData(lang, id);

  const meta = {
    title: `${title} | Diego Bonavida`,
    description,
  };

  return {
    props: {
      meta,
      title,
      ...postData,
    },
  };
};

export default PostTemplate;
