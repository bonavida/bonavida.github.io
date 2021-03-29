import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  slug: string[];
}

export type PostParams = {
  params: Params;
};

export type PostMetadata = {
  id: string;
  title?: string;
  date?: string;
  readingTime: string;
};

export type Post = {
  content: string;
  lang: string;
  otherLangs: string[];
} & PostMetadata;
