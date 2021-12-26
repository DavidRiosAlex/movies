import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import {useInfiniteVerticalScrollRef} from '../../customHooks/hooks';
import {fetchTopRatedMovies} from '../../store/actions';
import { useCallback } from 'react';

export const MoviesList = ({movies}) => {
  const dispatch = useDispatch();
  const {page, totalMovies, totalPages, fetching} = useSelector( state => state.cinema);

  const fetchMore = useCallback(() => {
    if (!fetching) {
      dispatch(fetchTopRatedMovies({page: page + 1}));
    }
  }, [page]);

  const scrollRef = useInfiniteVerticalScrollRef({
    page,
    callback: fetchMore,
    errorHeight: 10,
    condition: page + 1 <= totalPages && totalMovies >= movies.length && !fetching
  });
  return(
    <div className={styles.moviesList} ref={scrollRef}>
      {movies.map((movie) => <MovieCard key={movie.id.toString()} {...movie} />)}
    </div>); 
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;