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
  description?: string;
  date?: string;
  readingTime: string;
};

export type Post = {
  content: string;
  lang: string;
  otherLangs: string[];
} & PostMetadata;

export interface MetaProps {
  title: string;
  description: string;
  cardImage: string;
}
