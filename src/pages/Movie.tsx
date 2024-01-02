import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PlatformSelect from '../components/PlatformSelect';

import useMovie from '../hooks/useMovie';

import NotFound from './NotFound';

import styles from '../styles/MoviePage.module.scss';

import { BsDot } from 'react-icons/bs';
import { GoDotFill  } from 'react-icons/go';
import { IoMdStar } from 'react-icons/io';
import { FaImdb } from 'react-icons/fa';

import urlBuilder from '../utils/urlBuilder';

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
      <div className={styles.main}>
        <div>
          <h1>{movie.title}</h1>
          <div className={styles.movieMeta}>
            <p>{new Date(movie.release_date).getFullYear()}</p>
            <GoDotFill  size='12px' />
            <p>{movie.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
          {movie.overview && (
            <p className={styles.description}>{movie.overview}</p>
          )}
          <div className={styles.moreInfo}>
            <div className={styles.rating}>
              <IoMdStar />
              <p>{movie.vote_average}</p>
            </div>
            {movie.imdb_id && (
              <>
                <GoDotFill  size='12px' className={styles.separator} />
                <div className={styles.links}>
                  <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                    <FaImdb size='21px' />
                  </a>
                </div>
              </>
            )}
          </div>
          <PlatformSelect movieId={movie.id} />
        </div>
      </div>
    </div>
  );
};

export default Movie;
