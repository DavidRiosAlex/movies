import { useState } from 'react';
import styles from './MoviesList.module.scss';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';
import MovieCard from '../MovieCard/MovieCard';

{/* <div className={styles.items}>
  <div>
    <span>Sort by:</span>
    <SortingOptions selectedOption={sortingType} onChange={handleSortingChange}/>
  </div>
  {
    movies.map(movie =>
      <MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={handleSelectMovie}/>
    )
  }
</div> */}

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
      {/* {
        selectedMovie && (
          <ExpandedMovieItem movie={selectedMovie} />
        )
      } */}
    </div>
  ) 
}

// const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
//   <div className="expanded_movie_item">
//     <TMDBImage src={poster_path} className="poster" />
//     <div className="description">
//       <h2>{title}({original_title})</h2>
//       <div><h4>Rank(votes count)</h4>: <span>{vote_average}({vote_count})</span></div>
//       <span>{overview}</span>
//     </div>
//   </div>
// )