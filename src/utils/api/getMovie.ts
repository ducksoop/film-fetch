import MovieType from '../../types/Movie';
import urlBuilder from '../urlBuilder';

const getMovie = async (id: string): Promise<MovieType | null> => {
  const request = await fetch(urlBuilder(`/movie/${id}`));
  const response = await request.json();

  if (response.ok) {
    return response;
  }

  return null;
};

export default getMovie;
