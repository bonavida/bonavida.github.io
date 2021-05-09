import { LastfmImage } from '@customTypes/lastfm';

const imageWeight: Record<string, number> = {
  small: 0,
  medium: 1,
  large: 2,
  extralarge: 3,
};

export const getLargestImage = (images: LastfmImage[] = []): LastfmImage =>
  images.reduce(
    (prev: LastfmImage, curr: LastfmImage) =>
      imageWeight[prev.size] > imageWeight[curr.size] ? prev : curr,
    {} as LastfmImage
  );
