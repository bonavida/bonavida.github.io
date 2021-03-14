import ReactMarkdown from 'react-markdown';
import Head from 'next/head';
/** Types */
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post, PostParams } from '@customTypes/post';
/** Services */
import { getAllPostIds, getPostData } from '@services/posts';
/** Styles */
import 'prismjs/themes/prism.css';

const PostTemplate = ({ content, title }: Post): JSX.Element => (
  <>
    <Head>
      <title>{title} | bonavida.dev</title>
    </Head>
    <h1>{title}</h1>
    <ReactMarkdown allowDangerousHtml>{content}</ReactMarkdown>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: PostParams) => {
  const postData = await getPostData(id);

  return {
    props: {
      ...postData,
    },
  };
};

export default PostTemplate;
