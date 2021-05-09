// Last.fm types

export interface LastfmImage {
  size: string;
  '#text': string;
}

export interface LastfmAlbum {
  mbid: string;
  title: string;
  artist: string;
  url: string;
  image?: LastfmImage[];
}

export interface LastfmArtist {
  mbid: string;
  name: string;
  url: string;
  image?: LastfmImage[];
}

export interface LastfmTrack {
  mbid: string;
  name: string;
  url: string;
  artist: LastfmArtist;
}

export interface LastfmTrackInfo extends LastfmTrack {
  album: LastfmAlbum;
}

export interface TopTracksResponseData {
  '@attr': string;
  track: LastfmTrack[];
}

export interface TopArtistsResponseData {
  '@attr': string;
  artist: LastfmArtist[];
}

export interface TopTracksResponse {
  toptracks: TopTracksResponseData;
}

export interface TopArtistsResponse {
  topartists: TopArtistsResponseData;
}

export interface TrackInfoResponse {
  track: LastfmTrackInfo;
}

// Custom types

export interface Track {
  mbid: string;
  name: string;
  artist: string;
  album?: string;
  image?: string;
}

export interface Artist {
  mbid: string;
  name: string;
  url: string;
  image?: string;
}
