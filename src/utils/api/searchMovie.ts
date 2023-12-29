import Movie from '../../types/Movie';
import urlBuilder from '../urlBuilder';

const searchMovie = async (query: string): Promise<Movie[] | null> => {
  const request = await fetch(
    urlBuilder('/search/movie', {
      query,
    })
  );

  const response = await request.json();

  if (request.ok) {
    return response.results.slice(0, 4);
  }

  return null;
};

export default searchMovie;
