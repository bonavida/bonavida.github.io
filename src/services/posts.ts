import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkPrism from 'remark-prism';
import readingTime from 'reading-time';
/** Types */
import { PostMetadata, Post, PostPath } from '@customTypes/post';
/** Constants */
import Constants from '@constants/common';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');
const defaultPostsDirectory = path.join(postsDirectory, Constants.DEFAULT_LANG);

export const getSortedPostsData = (): PostMetadata[] => {
  // Get file names under /posts/{defaultLang}
  const fileNames = fs.readdirSync(defaultPostsDirectory);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, '');

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

export const getAllPathsFromPosts = (): PostPath[] => {
  // Get the posts from the default languange
  const fileNames = fs.readdirSync(defaultPostsDirectory);
  // Get all the available languages
  const langs = fs
    .readdirSync(postsDirectory)
    .filter((lang) => lang !== Constants.DEFAULT_LANG);

  // Build all the paths using the locale (if needed) and the filename
  // Default lang URL -> /post/hello-world
  // Other lang URL -> /post/{lang}/hello-world
  return fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
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
  lang: string = Constants.DEFAULT_LANG,
  id: string
): Promise<Post> => {
  // Get content from /posts/{lang}/{id}.mdx file
  const fullPostsDirectory =
    lang === Constants.DEFAULT_LANG
      ? defaultPostsDirectory
      : path.join(postsDirectory, lang);
  const fullPath = path.join(fullPostsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Use next-mdx-remote to convert markdown into HTML
  const processedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkPrism],
    },
  });

  const { text } = readingTime(content);

  const otherLangs = fs
    .readdirSync(postsDirectory)
    .filter((language) => language !== Constants.DEFAULT_LANG);

  return {
    id,
    content: processedContent,
    readingTime: text,
    lang,
    otherLangs,
    ...data,
  };
};
