import { useEffect, useState } from 'react';

import MovieType from '../types/Movie';

import urlBuilder from '../utils/urlBuilder';

const useSearch = (query: string): MovieType[] => {
  const [searchResults, setSearchResults] = useState<MovieType[]>([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(urlBuilder('/search/movie', { query }));

      if (request.ok) {
        const { results } = await request.json();

        setSearchResults(results);
      }
    })();
  }, []);

  return searchResults;
};

export default useSearch;
