import {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopRatedMovies} from '../../store/actions';
import styles from './MovieLibrary.module.scss';
import {getMovies} from '../../store/selectors';
import MoviesList from '../MoviesList/MoviesList';
import {CLEAN_CINEMA} from '../../../actionTypes';
import { Select } from '../common/Select';

export default function MovieLibrary() {
  const [sortingType, setSortingType] = useState(1);
  const dispatch = useDispatch();
  const {movies} = useSelector(getMovies);

  const fetchMovies = useCallback(() => {
    dispatch(fetchTopRatedMovies({pages: [1, 2, 3]}));
  }, []);

  useEffect(() => {
    fetchMovies();
    return () => {dispatch({type: CLEAN_CINEMA});};
  }, []);

  const sortByOptionCallback= (a, b) => {
    if (sortingType === 1) {
      return a.original_title < b.original_title ? -1 : (a.original_title > b.original_title ? 1 : 0);
    } else if (sortingType === 2) {
      return a.original_title > b.original_title ? -1 : (a.original_title < b.original_title ? 1 : 0);
    } else if (sortingType === 3) {
      return b.vote_average - a.vote_average;
    }
  };

  const renderMovies = useMemo(() => {
    console.log(movies);
    return Object.values(movies.reduce((acc, elem) => {
      acc[elem.id] = elem;
      return acc;
    }, {})).sort(sortByOptionCallback);
  }, [movies, sortingType]);

  return(
    <div className={styles.pageContainer}>
      <div className={styles.headerFilters}>
        <Select value={sortingType} options={[{value: 1, label: 'A-Z'}, {value: 2, label: 'Z-A'}, {value: 3, label: 'RATING'}]} onSelect={value => setSortingType(value)} />
      </div>
      <div className={styles.movies} unselectable='on'>
        <MoviesList movies={renderMovies} />
      </div>
    </div>);
}
