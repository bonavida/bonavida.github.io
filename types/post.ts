import { ParsedUrlQuery } from 'querystring';

interface Params extends ParsedUrlQuery {
  id: string;
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
} & PostMetadata;
