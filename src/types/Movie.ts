export default interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  [key: string]: Array<number> | number | string | boolean | null;
}
