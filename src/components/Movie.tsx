import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

import styles from '../styles/Movie.module.scss';

interface Props {
  id: number;
  poster_path: string | null;
  title: string;
}

const Movie = ({ id, poster_path, title }: Props) => {
  return (
    <Link to={`/movie/${id}`} key={id} className={styles.movie}>
      <div>
        <div className={styles.imgWrapper}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w92/${poster_path}`
                : 'https://via.placeholder.com/100x150'
            }
            alt={`Backdrop for ${title}`}
          />
        </div>
        <p>{title}</p>
      </div>
      <IoIosArrowForward size='24px' color='white' />
    </Link>
  );
};

export default Movie;
