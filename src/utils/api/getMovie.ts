import MovieType from '../../types/Movie';
import urlBuilder from '../urlBuilder';

const getMovie = async (id: string): Promise<MovieType | null> => {
  const request = await fetch(urlBuilder(`/movie/${id}`));
  const response = await request.json();

  return response;
};

export default getMovie;
