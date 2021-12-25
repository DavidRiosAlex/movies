import {createPortal} from 'react-dom';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import styles from './Modal.module.scss';

export const Modal = ({showModal = false, onOutModalClick, ...rest}) => {
  const handleOutClick = (e) => {
    e.stopPropagation();
    onOutModalClick(e);
  };

  return showModal && createPortal(<div onClick={handleOutClick} className={styles.portalContainer}>
    <MovieDetail {...rest} />
  </div>, document.querySelector('#portal'));
};