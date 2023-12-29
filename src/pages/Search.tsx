import { useParams } from 'react-router-dom';

const Search = () => {
  const { query } = useParams();
  return <h1>Search: {query}</h1>;
};

export default Search;
