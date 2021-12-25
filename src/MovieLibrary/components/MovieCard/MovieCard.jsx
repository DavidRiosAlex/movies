import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import styles from './MovieCard.module.scss';
import { MovieDetail } from '../MovieDetail/MovieDetail';

export const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({poster_path, ...details}) => {
  const [showModal, setShowModal] = useState(false);
  const handleMovieClick = () => {
    setShowModal(!showModal);
  };
  const handleErrorOnFetchImage = (event) => {
    event.target.onerror = null;
    event.target.src='./assets/defaults/claqueta.svg';
  };
  return (
    <div className={styles.cardContainer}>
      {<Modal showModal={showModal} onOutModalClick={() => setShowModal(false)} {...details} poster_path={poster_path} component={MovieDetail} />}
      <img src={TMDB_IMAGE_BASE_PATH + poster_path} className={styles.moviePoster} onClick={handleMovieClick} onError={handleErrorOnFetchImage}/>
    </div>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
};

export default memo(MovieCard);
