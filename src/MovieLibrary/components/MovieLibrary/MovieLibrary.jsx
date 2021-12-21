import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchTopRatedMovies} from '../../store/actions'
import styles from './MovieLibrary.module.scss'
import { getMovies } from '../../store/selectors'
import Text from '../Text/Text';
import MoviesList from '../MoviesList/MoviesList'

export default function MovieLibrary() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTopRatedMovies())
  }, [])
  const movies = useSelector(getMovies)
  return(
    <div className={styles.pageContainer}>
      <Text text="What to watch on cinema" type="title"/>
      <div className={styles.grid}>
        <Text text="Premiere Billboard" margin="15px" type="subtitle" />
        <div className={styles.moviesContainer}>
          <MoviesList movies={movies} />
        </div>
        <div style={{backgroundColor: 'transparent'}}></div>
        <div style={{backgroundColor: 'transparent'}}></div>
      </div>
    </div>)
}
