import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import {useInfiniteVerticalScrollRef} from '../../customHooks/hooks';
import {fetchTopRatedMovies} from '../../store/actions';

export const MoviesList = ({movies}) => {
  const dispatch = useDispatch();
  const {page, totalMovies, totalPages} = useSelector( state => state.cinema);

  const scrollRef = useInfiniteVerticalScrollRef({
    page,
    callback: () => dispatch(fetchTopRatedMovies({page: page + 1})),
    errorHeight: 10,
    condition: page + 1 <= totalPages && totalMovies >= movies.length
  });
  return(
    <div className={styles.moviesList} ref={scrollRef}>
      {movies.map((movie) => <MovieCard key={movie.original_title} {...movie} />)}
    </div>); 
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;