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
/** Constants */
import { constants } from '@constants/index';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');
const defaultPostsDirectory = path.join(postsDirectory, constants.DEFAULT_LANG);

export const getSortedPostsData = (): PostMetadata[] => {
  // Get file names under /posts/{defaultLang}
  const fileNames = fs.readdirSync(defaultPostsDirectory);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(defaultPostsDirectory, fileName);
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

export const getAllPostIds = (): PostParams[] => {
  const fileNames = fs.readdirSync(defaultPostsDirectory);
  const langs = fs
    .readdirSync(postsDirectory)
    .filter((lang) => lang !== constants.DEFAULT_LANG);

  return fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const langPaths = langs.map((lang) => ({
        params: {
          slug: [lang, id],
        },
      }));

      return [
        {
          params: {
            slug: [id],
          },
        },
        ...langPaths,
      ];
    })
    .flat();
};

export const getPostData = async (
  lang: string = constants.DEFAULT_LANG,
  id: string
): Promise<Post> => {
  // Get content from /posts/{defaultLang | lang}/{id}.md file
  const fullPostsDirectory =
    lang === constants.DEFAULT_LANG
      ? defaultPostsDirectory
      : path.join(postsDirectory, lang);
  const fullPath = path.join(fullPostsDirectory, `${id}.md`);
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

  const otherLangs = fs
    .readdirSync(postsDirectory)
    .filter((language) => language !== constants.DEFAULT_LANG);

  return {
    id,
    content: contentHtml,
    readingTime: text,
    lang,
    otherLangs,
    ...data,
  };
};
