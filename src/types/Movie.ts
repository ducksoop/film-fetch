export default interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  genres: Array<{ id: number; name: string }>;
  overview: string | null;
  vote_average: number;
  [key: string]:
    | Array<number>
    | Array<object>
    | number
    | string
    | boolean
    | null;
}
