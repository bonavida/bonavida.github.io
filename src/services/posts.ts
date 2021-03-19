import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import readingTime from 'reading-time';
/** Types */
import { PostMetadata, Post, PostParams } from '@customTypes/post';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export const getSortedPostsData = (): PostMetadata[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostMetadata[] = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
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
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
};

export const getPostData = async (id: string): Promise<Post> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { content, data } = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).use(prism).process(content);
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
