import {useDispatch, useSelector} from 'react-redux';
import styles from './MoviesList.module.scss';
import MovieCard from '../MovieCard/MovieCard';
import {useInfiniteVerticalScrollRef} from '../../customHooks/hooks';
// import {getMovies} from '../../store/selectors';
import {fetchTopRatedMovies} from '../../store/actions';

export default function MoviesList (){
  const dispatch = useDispatch();
  const {page, totalMovies, totalPages, movies} = useSelector( state => state.cinema);

  const infinityHorizontalScrollCallback = () => {
    console.log('requesting..')
    dispatch(fetchTopRatedMovies({page: page + 1}));
  };
  const scrollRef = useInfiniteVerticalScrollRef({
    page,
    callback: infinityHorizontalScrollCallback,
    errorHeight: 10,
    condition: page + 1 <= totalPages && totalMovies >= movies.length
  });
  return(
    <div className={styles.moviesList} ref={scrollRef}>
      {movies.map((movie) => <MovieCard key={movie.original_title} {...movie} />)}
    </div>); 
}