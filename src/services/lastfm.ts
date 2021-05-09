import http from '@services/core/http';
import { AxiosResponse } from 'axios';
/** Types */
import {
  TopTracksResponseData,
  TopTracksResponse,
  TopArtistsResponseData,
  TopArtistsResponse,
  TrackInfoResponse,
  Track,
} from '@customTypes/lastfm';

const { LASTFM_API_KEY, LASTFM_USER } = process.env;
const BASE_URL = 'https://ws.audioscrobbler.com/2.0/?method=';

const baseParams = {
  api_key: LASTFM_API_KEY,
  format: 'json',
};

export const getTopTracks = (
  period = '1month'
): Promise<TopTracksResponseData> => {
  const params = {
    ...baseParams,
    method: 'user.gettoptracks',
    user: LASTFM_USER,
    period,
    limit: 10,
  };

  return http
    .get<TopTracksResponse>(BASE_URL, { params })
    .then((res) => res.data.toptracks);
};

export const getTopArtists = (
  period = '1month'
): Promise<TopArtistsResponseData> => {
  const params = {
    ...baseParams,
    method: 'user.gettopartists',
    user: LASTFM_USER,
    period,
    limit: 5,
  };

  return http
    .get<TopArtistsResponse>(BASE_URL, { params })
    .then((res) => res.data.topartists);
};

const _getTrackInfo = (
  track: string,
  artist: string
): Promise<AxiosResponse<TrackInfoResponse>> => {
  const params = {
    ...baseParams,
    method: 'track.getInfo',
    track,
    artist,
  };

  return http.get<TrackInfoResponse>(BASE_URL, { params });
};

export const getAllTracksInfo = (
  tracks: Partial<Track>[]
): Promise<AxiosResponse<TrackInfoResponse>[]> => {
  const requests = tracks.map(({ name, artist }) =>
    _getTrackInfo(name, artist)
  );
  return http.all(requests);
};
