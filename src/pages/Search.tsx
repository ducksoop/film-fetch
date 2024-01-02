import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useSearch from '../hooks/useSearch';

import MovieType from '../types/Movie';

import styles from '../styles/Search.module.scss';
import Movie from '../components/Movie';

const Search = () => {
  const navigate = useNavigate();
  const { query } = useParams();

  const [loading, setLoading] = useState(true);
  const searchResult = useSearch(query ?? '');

  useEffect(() => {
    setLoading(false);
  }, [searchResult]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.back} onClick={() => navigate(-1)}>
          {'> Back'}
        </p>
        <h1>
          Found {searchResult.length} movies for: {query}
        </h1>
        <div className={styles.movies}>
          {searchResult.map((movie: MovieType) => (
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
