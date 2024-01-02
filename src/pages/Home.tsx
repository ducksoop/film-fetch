import { KeyboardEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Movie from '../components/Movie';

import MovieType from '../types/Movie';
import searchMovie from '../utils/api/searchMovie';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

import styles from '../styles/Home.module.scss';

interface Props {}

const Home = ({}: Props) => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieType[]>();

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

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Search for a movie</h1>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              type='text'
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputSubmit}
              value={query}
            />
            <div>
              {query.length > 0 && (
                <IoClose
                  size='24px'
                  color='white'
                  onClick={() => setQuery('')}
                />
              )}
              <AiOutlineSearch
                size='26px'
                color='#ffffff'
                onClick={() => navigate(`/search/${query}`)}
              />
            </div>
          </div>
          {searchResults && (
            <div className={styles.searchResults}>
              {searchResults.map((movie: MovieType) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
