import { Provider } from 'react-redux'
import MovieLibrary from './MovieLibrary/components/MovieLibrary/MovieLibrary';
import store from './MovieLibrary/store';

export default function App() {
  return (
    <Provider store={store}>
      <MovieLibrary />
    </Provider>)
}
