import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import codeExtra from 'remark-code-extra';
import codeFrontmatter from 'remark-code-frontmatter';
import readingTime from 'reading-time';
/** Types */
import { PostMetadata, Post, PostParams } from '@customTypes/post';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export const getSortedPostsData = (locale: string): PostMetadata[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(`${postsDirectory}/${locale}`);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(`${postsDirectory}/${locale}`, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { content, data } = matter(fileContents);

    const { text } = readingTime(content);

    // Combine the data with the id
    return {
      id,
      readingTime: text,
      ...data,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: aDate }, { date: bDate }) =>
    aDate < bDate ? 1 : -1
  );
};

export const getAllPostIds = (locales: string[]): PostParams[] =>
  locales.reduce((acc, locale) => {
    const fileNames = fs.readdirSync(`${postsDirectory}/${locale}`);
    const paths = fileNames.map((fileName) => ({
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
      locale,
    }));
    acc.push(...paths);
    return acc;
  }, []);

export const getPostData = async (
  id: string,
  locale: string
): Promise<Post> => {
  const fullPath = path.join(`${postsDirectory}/${locale}`, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    // .use(codeFrontmatter)
    // .use(codeExtra, {
    //   transform: (node) =>
    //     node.frontmatter.before || node.frontmatter.after
    //       ? {
    //           before: node.frontmatter.before && [
    //             {
    //               type: 'text',
    //               value: node.frontmatter.before,
    //             },
    //           ],
    //           after: node.frontmatter.after && [
    //             {
    //               type: 'text',
    //               value: node.frontmatter.after,
    //             },
    //           ],
    //         }
    //       : null,
    // })
    .use(html)
    .use(prism)
    .process(content);
  const contentHtml = processedContent.toString();

  const { text } = readingTime(content);

  // Combine the data with the id and contentHtml
  return {
    id,
    content: contentHtml,
    readingTime: text,
    ...data,
  };
};
