export default interface Movie {
  id: number;
  title: string;
  [key: string]: Array<number> | number | string | boolean | null;
}
