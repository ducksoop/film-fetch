import { useEffect, useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/Home.module.scss';
import Movie from '../types/Movie';
import searchMovie from '../utils/api/searchMovie';

interface Props {}

const Home = ({}: Props) => {
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Movie[]>();

  useEffect(() => {
    (async () => {
      if (query.trim().length < 3) {
        setSearchResults([]);
        return;
      }

      const results = await searchMovie(query);

      if (results) {
        setSearchResults(results);
      }
    })();
  }, [query]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Search for a movie</h1>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <AiOutlineSearch size='26px' color='#ffffff' />
          </div>
          {searchResults && (
            <div className={styles.searchResults}>
              {searchResults.map((movie: Movie) => (
                <div className={styles.movie} key={movie.id}>
                  {movie.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
