import {LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS} from '../../actionTypes';

export const fetchTopRatedMovies = ({pages, page}={}) => async (dispatch, getState, {api, apiKey, language}) => {
  let response;
  const movies = [];
  try {
    dispatch({type: LOAD_MOVIES_REQUEST});

    if (Array.isArray(pages)) {
      for (const page of pages) {
        response = await api({method: 'get', params: {api_key: apiKey, language, page}});
        movies.push(...response.data.results);
      }
      dispatch({
        type: LOAD_MOVIES_SUCCESS,
        payload:{
          movies: movies,
          totalMovies: response.data.total_results,
          totalPages: response.data.total_pages,
          page: response.data.page,
        }
      });
      return null;
    }
    response = await api({method: 'get', params: {api_key: apiKey, language, page: page}});

    dispatch({
      type: LOAD_MOVIES_SUCCESS,
      payload: {
        movies: response.data.results,
        totalMovies: response.data.total_results,
        totalPages: response.data.total_pages,
        page: page,
      }
    });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  } catch (error) {
    console.error(error);
    dispatch({type: LOAD_MOVIES_FAILURE, payload: error.message});
  }
};
