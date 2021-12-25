import { moviesReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import call from '../service';

const store = configureStore({
  reducer: {
    cinema: moviesReducer,
  },
  middleware: defaultMiddleware => defaultMiddleware({
    thunk: {
      extraArgument: {
        api: call,
        apiKey: process.env.REACT_APP_API_KEY,
        language: 'en-US',
      }
    }
  })
});

export default store;