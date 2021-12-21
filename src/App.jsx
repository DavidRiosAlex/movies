
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import MovieLibrary from './MovieLibrary/components/MovieLibrary/MovieLibrary';
import {moviesReducer} from './MovieLibrary/store';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <MovieLibrary />
    </Provider>)
}
