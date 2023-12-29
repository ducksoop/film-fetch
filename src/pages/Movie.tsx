import { useEffect, useState } from "react";

import useMovie from "../hooks/useMovie";

import NotFound from "./NotFound";

interface Props {
  id?: string;
}

const Movie = ({ id }: Props) => {
  // Use prop to fetch movie?
  const [loading, setLoading] = useState<boolean>(true);
  const { movie, notFound } = useMovie(id ?? '0');

  useEffect(() => {
    setLoading(false);
  }, [movie]);

  if (loading) return <h1>Loading</h1>;

  if (notFound || !movie) return <NotFound />;

  return <h1>Movie id: {movie.title}</h1>;
};

export default Movie;
