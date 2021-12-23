import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './MoviesList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import {useInfiniteVerticalScrollRef} from '../../customHooks/hooks';
import {getMovies} from '../../store/selectors';
import {fetchTopRatedMovies} from '../../store/actions';

export default function MoviesList ({}){
  const dispatch = useDispatch();
  const {params, totalMovies, totalPages, movies} = useSelector(getMovies);

  const infinityHorizontalScrollCallback = useCallback(() => {
    if (params.page <= totalPages || totalMovies >= movies.lenght) {
      dispatch(fetchTopRatedMovies({page: params.page + 1}))
    }
  }, [params.page])
console.log(movies)
  const scrollRef = useInfiniteVerticalScrollRef(infinityHorizontalScrollCallback, 10);
  return(
    <div className={styles.moviesList} ref={scrollRef}>
      {movies.map((movie) => <MovieCard key={movie.original_title} {...movie} />)}
    </div>) 
};