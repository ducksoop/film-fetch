import { useEffect, useState } from 'react';

import MovieType from '../types/Movie';
import getMovie from '../utils/api/getMovie';

const useMovie = (id: string) => {
  const [movie, setMovie] = useState<MovieType | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const result = await getMovie(id);

      if (!result) {
        setNotFound(true);
      } else {
        setMovie(result);
      }
    })();
  }, []);

  return { movie, notFound };
};

export default useMovie;
