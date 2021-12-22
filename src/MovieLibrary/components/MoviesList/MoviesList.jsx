import { useState } from 'react';
import styles from './MoviesList.module.scss';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import MovieCard from '../MovieCard/MovieCard';

export default function MoviesList ({ movies }){
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [sortingType, setSortingType] = useState('')
  const handleSelectMovie = movie => setSelectedMovie(movie)
  const handleSortingChange = event => {
    setSortingType(event.target.value)
  }
  return(
    <div className={styles.moviesList}>
      <HorizontalScroll data={movies} component={MovieCard}/>
    </div>
  ) 
};