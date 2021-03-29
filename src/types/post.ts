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
};

export type Post = {
  content: string;
  readingTime: string;
  lang: string;
  otherLangs: string[];
} & PostMetadata;
