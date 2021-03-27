import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string;
}

export type PostParams = {
  params: Params;
  locale: string;
};

export type PostMetadata = {
  id: string;
  title?: string;
  date?: string;
  readingTime: string;
};

export type Post = {
  content: string;
  readingTime: string;
} & PostMetadata;
