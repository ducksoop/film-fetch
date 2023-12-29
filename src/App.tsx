import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Search />} path='/search/:query' />
      <Route element={<Movie />} path='/movie/:id' />
      <Route element={<NotFound />} path='*' />
    </Routes>
  );
}

export default App;
