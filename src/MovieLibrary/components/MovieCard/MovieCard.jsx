import { memo, useState } from "react";
import ReactDOM from 'react-dom';
import styles from './MovieCard.module.scss';
import Text from '../Text/Text';

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'
const style = {
  portalContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    width: '100vw',
    height: '100vh'
  }
}
const MovieCard = ({original_title, backdrop_path, poster_path}) => {
  const [showModal, setShowModal] = useState(false);
  const handleMovieClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.cardContainer}>
      {showModal && ReactDOM.createPortal(<div onClick={handleMovieClick} style={style.portalContainer}>holaaa</div>, document.querySelector('#portal'))}
      <img src={TMDB_IMAGE_BASE_PATH + poster_path} className={styles.moviePoster} onClick={handleMovieClick}/>
    </div>
  )
};

const isEqualComponent = (prevProps, nextProps) => {
    return prevProps.original_title === nextProps.original_title
};

export default memo(MovieCard, isEqualComponent);
