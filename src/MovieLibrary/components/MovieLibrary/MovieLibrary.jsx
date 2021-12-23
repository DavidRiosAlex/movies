import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import {fetchTopRatedMovies} from '../../store/actions';
import styles from './MovieLibrary.module.scss'
import {getMovies} from '../../store/selectors'
import MoviesList from '../MoviesList/MoviesList'
import {CLEAN_CINEMA} from '../../../actionTypes';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: "black",
    border: "1px solid white",
    color: 'white',
    padding: '0 10px'
  }
}));

export default function MovieLibrary() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [sortingType, setSortingType] = useState(1);
  const dispatch = useDispatch();
  const {movies, params} = useSelector(getMovies);

  const fetchMovies = useCallback(() => {
    dispatch(fetchTopRatedMovies({page: params.page}));
  }, []);

  useEffect(() => {
    fetchMovies();
    return () => dispatch({type: CLEAN_CINEMA});
  }, []);

  const handleSelectMovie = movie => setSelectedMovie(movie)
  const sortByOptionCallback= (a, b) => {
    if (sortingType === 1) {
      return a.original_title < b.original_title ? -1 : (a.original_title > b.original_title ? 1 : 0)
    } else if (sortingType === 2) {
      return a.original_title > b.original_title ? -1 : (a.original_title < b.original_title ? 1 : 0)
    } else if (sortingType === 3) {
      return a.vote_average - b.vote_average  
    }
  }
console.log(movies)
  return(
    <div className={styles.pageContainer}>
      <div className={styles.headerFilters}>
        <Select
          labelId="sort by"
          id="sort_by"
          value={sortingType}
          label="sorted by"
          input={<BootstrapInput />}
          onChange={setSortingType}>
          <MenuItem value={1}>A-Z</MenuItem>
          <MenuItem value={2}>Z-A</MenuItem>
          <MenuItem value={3}>Rating</MenuItem>
        </Select>
      </div>
      <div className={styles.movies}>
        <MoviesList movies={movies.sort(sortByOptionCallback)} />
      </div>
    </div>)
}
