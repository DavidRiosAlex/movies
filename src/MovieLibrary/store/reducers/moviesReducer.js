import {LOAD_MOVIES_FAILURE, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_REQUEST, CLEAN_CINEMA} from '../../../actionTypes';

const initialState = {
  fetching: false,
  movies: [],
  page: 0,
  totalPages: 0,
  totalMovies: 0,
  error: null,
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
  case LOAD_MOVIES_REQUEST: {
    return {...state, fetching: true};
  }
  case LOAD_MOVIES_SUCCESS: {
    return {
      ...state,
      movies: [...state.movies, ...payload.movies],
      page: payload.page,
      totalPages: payload.totalPages,
      totalMovies: payload.totalMovies,
      fetching: false,
    };
  }
  case LOAD_MOVIES_FAILURE: {
    return {...state, fetching: false, error: payload};
  }
  case CLEAN_CINEMA: {
    return {...initialState};
  }
  default:
    return state;
  }
}
