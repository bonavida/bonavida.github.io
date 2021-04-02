import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialMediaParams {
  id: string;
  url: string;
  icon: IconProp;
}

export const allSocialMedia: SocialMediaParams[] = [
  { id: 'github', url: 'https://github.com/bonavida', icon: ['fab', 'github'] },
  {
    id: 'twitter',
    url: 'https://twitter.com/elabacabu',
    icon: ['fab', 'twitter'],
  },
  {
    id: 'lastfm',
    url: 'https://www.last.fm/es/user/bonavida',
    icon: ['fab', 'lastfm'],
  },
  {
    id: 'mail',
    url: 'mailto:dbonavidafrances@gmail.com',
    icon: ['far', 'envelope'],
  },
];
