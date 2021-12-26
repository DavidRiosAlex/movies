import {useTransition, animated} from 'react-spring';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './MovieDetail.module.scss';
import { TMDB_IMAGE_BASE_PATH } from '../MovieCard/MovieCard';

export const MovieDetail = ({poster_path, ...details}) => {
  const transition = useTransition(true, {
    from: {opacity: 0, x: -5, border: '1px solid black'},
    enter: {opacity: 1, x: 0, color: '1px solid black'},
    to: {opacity: 1},
  });
  const handleErrorOnFetchImage = (event) => {
    event.target.onerror = null;
    event.target.src='./assets/defaults/claqueta.svg';
  };

  return transition((style) => (
    <animated.div style={style} className={styles} onClick={(e) => e.stopPropagation()}>
      <Card sx={{ flex: 0.5, height: '70%', width: 700}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="300"
          image={TMDB_IMAGE_BASE_PATH + poster_path}
          onError={handleErrorOnFetchImage}
        />
        <CardContent sx={{backgroundColor: 'hsl(0, 0%, 8%)'}}>
          <div className={`${styles.overview} ${styles.margin_left_10} ${styles.flex100} ${styles.justify_start} ${styles.align_center}`}>
            <div className={`${styles.category} ${styles.flex10}`}>
              <span className="fa fa-users"></span>
              {details.vote_count}
            </div>
            <div className={`${styles.category} ${styles.flex50} ${styles.margin_left_10}`}>
              <span className={`${styles.flex25} ${styles.space_evenly}`}><span className="fa fa-heart"></span>{details.vote_average}</span>
            </div>
          </div>
        </CardContent>
        <CardContent sx={{backgroundColor: 'hsl(0, 0%, 8%)'}}>
          <div className={styles.overview}>
            <div className={`${styles.description} ${styles.margin_left_10}`}>
              <div className={`${styles.font_size_30} ${styles.margin_bottom_20}`}>{details.original_title}</div>
              <div>{details.overview}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </animated.div>
  ));
};

MovieDetail.propTypes = {
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
};