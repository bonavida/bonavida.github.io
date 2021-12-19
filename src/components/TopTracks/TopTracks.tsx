/** Types */
import { Track } from '@customTypes/lastfm';
/** Styles */
import styles from './TopTracks.module.scss';

interface TopTrackPops {
  tracks: Track[];
}

const TopTracks = ({ tracks }: TopTrackPops): JSX.Element => {
  const onImageErrorHandler = ({ target }) => {
    target.src = '/img/no-album.png';
  };

  return (
    <div className={styles.topTracks}>
      {tracks.map(({ mbid, name, artist, image }) => (
        <div className={styles.topTrack} key={mbid}>
          <img
            src={image}
            alt={name}
            className={styles.topTrackCover}
            onError={onImageErrorHandler}
          />
          <div className={styles.topTrackMetadata}>
            <span title={name} className={styles.topTrackName}>
              {name}
            </span>
            <span title={artist} className={styles.topTrackArtist}>
              {artist}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTracks;
