import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useMovie from '../hooks/useMovie';

import NotFound from './NotFound';

import styles from '../styles/MoviePage.module.scss';

const Movie = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [movie, notFound] = useMovie(id ?? '0');

  useEffect(() => {
    setLoading(false);
  }, [movie]);

  if (loading) return <h1>Loading</h1>;
  if (notFound || !movie) return <NotFound />;

  return (
    <div>
      <div
        className={`${styles.backdropContainer} ${
          movie.backdrop_path ? styles.noBackdrop : styles.isBackdrop
        }`}
      >
        <img
          className={styles.backdrop}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        />
      </div>
      <div className={styles.main}>{movie.title}</div>
    </div>
  );
};

export default Movie;
