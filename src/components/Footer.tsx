import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p>
          made by <a href='https://github.com/ducksoop'>Hazel</a>
        </p>
        <span>|</span>
        <a href='https://github.com/ducksoop/film-fetch'>fork on github</a>
      </div>
      <small>
        This product uses the{' '}
        <a href='https://developers.themoviedb.org'>TMDB API</a> but is not
        endorsed or certified by <a href='https://themoviedb.org'>TMDB</a>.
      </small>
    </div>
  );
};

export default Footer;
