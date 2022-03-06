import React, { useState } from 'react';
import PlayerModal from './PlayerModal';
import styles from './Thumbnail.module.css';

function Thumbnail({ title, thumbnails, videoId }) {
  const [player, setPlayer] = useState(false);

  const playerHandler = () => {
    return setPlayer(!player);
  };

  return (
    <section className={styles.ThumbnailArea}>
      <section className={styles.ThumbnailContainer}>
        <img
          className={styles.Thumbnails}
          src={thumbnails}
          alt="thumbnails"
          onMouseEnter={playerHandler}
        />
        <p>{title}</p>
        {player ? (
          <PlayerModal videoId={videoId} playerHandler={playerHandler} />
        ) : null}
      </section>
    </section>
  );
}

export default Thumbnail;
