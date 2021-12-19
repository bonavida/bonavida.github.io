import { ParsedUrlQuery } from 'querystring';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export type PostPath = {
  params: Params;
};

export type PostMetadata = {
  id: string;
  title?: string;
  description?: string;
  date?: string;
  readingTime: string;
};

export type Post = {
  content: MDXRemoteSerializeResult;
  lang: string;
  otherLangs: string[];
} & PostMetadata;
