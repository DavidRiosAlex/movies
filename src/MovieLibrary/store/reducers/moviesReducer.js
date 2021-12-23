import {LOAD_MOVIES_FAILURE, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_REQUEST, CLEAN_CINEMA} from '../../../actionTypes'

const initialState = {
  fetching: false,
  movies: [],
  params: {
    page: 0,
  },
  totalPages: 0,
  totalMovies: 0,
  error: null,
}

export default function (state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case LOAD_MOVIES_REQUEST: {
      return {...state, fetching: true}
    }
    case LOAD_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
        params: {
          page: action.payload.page,
        },
        totalPage: action.payload.totalPages,
        totalMovies: action.payload.totalMovies,
        fetching: false,
      }
    }
    case LOAD_MOVIES_FAILURE: {
      return {...state, fetching: false, error: action.payload}
    }
    case CLEAN_CINEMA: {
      return {...initialState};
    }
    default:
      return state
  }
}
