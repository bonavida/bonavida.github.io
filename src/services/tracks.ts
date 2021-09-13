import fs from 'fs';
import path from 'path';
/** Services */
import { getAllTracksInfo, getTopTracks } from '@services/lastfm';
/** Utils */
import { getLargestImage } from '@utils/lastfm';
import { hasReachedAWeek } from '@utils/date';
/** Types */
import { Track } from '@customTypes/lastfm';

const TOP_TRACKS_CACHE_PATH = path.join(process.cwd(), '.tracks');

export const fetchTopTracks = async (): Promise<Track[]> => {
  let cachedData;
  let tracks = [];

  // Check if the data is cached
  try {
    cachedData = JSON.parse(
      fs.readFileSync(TOP_TRACKS_CACHE_PATH, 'utf8') ?? null
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}

  // If data is cached and a week has not yet passed, use cached data
  if (
    cachedData &&
    cachedData?.updatedAt &&
    !hasReachedAWeek(cachedData?.updatedAt)
  ) {
    return cachedData.data;
  }

  // If not, fetch the data from the Last.fm API and store it in the cache file
  try {
    const { track = [] } = (await getTopTracks()) || {};

    const partialTracks: Partial<Track>[] = track.map(({ name, artist }) => ({
      name,
      artist: artist.name,
    }));

    const responses = (await getAllTracksInfo(partialTracks)) || [];

    tracks = responses
      .map((res) => res.data)
      .map(({ track: { mbid, url, name, artist, album } = {} }) => ({
        mbid: mbid || url,
        name,
        artist: artist?.name || '',
        album: album?.title || '',
        image: album?.image
          ? getLargestImage(album?.image)?.['#text']
          : '/no-album.png',
      }));

    // eslint-disable-next-line no-empty
  } catch (error) {}

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    fs.writeFileSync(
      TOP_TRACKS_CACHE_PATH,
      JSON.stringify({ updatedAt: today.getTime(), data: tracks }),
      { flag: 'w', encoding: 'utf8' }
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return tracks;
};
