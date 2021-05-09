/** Types */
import { Track } from '@customTypes/lastfm';
/** Styles */
import styles from './TopTracks.module.scss';

interface TopTrackPops {
  tracks: Track[];
}

const TopTracks = ({ tracks }: TopTrackPops): JSX.Element => (
  <>
    {tracks.map(({ mbid, name, artist, image }) => (
      <div className={styles.topTrack} key={mbid}>
        <img src={image} alt={name} className={styles.topTrackCover} />
        <div className={styles.topTrackMetadata}>
          <span className={styles.topTrackName}>{name}</span>
          <span className={styles.topTrackArtist}>{artist}</span>
        </div>
      </div>
    ))}
  </>
);

export default TopTracks;
