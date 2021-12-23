import {LOAD_MOVIES_FAILURE, LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS} from '../../actionTypes';

export const fetchTopRatedMovies = ({page=0}) => async (dispatch, getState, {api, apiKey, language}) => {
  try {
    dispatch({type: LOAD_MOVIES_REQUEST});
    let _page = page;
    let movies = [];
    let totalMovies = 0;
    let totalPages = 0;

    const requestCalls = Array.from({length: page ? 1 : 3}, () => {
      _page ++
      return api({method: 'get', params: {api_key: apiKey, language, page: _page}});
    });
    const responseList = await Promise.all(requestCalls);
    responseList.forEach(({data}) => {
      movies.push(...data.results);
      totalMovies = data.total_results;
      totalPages = data.total_pages;
    });
    dispatch({type: LOAD_MOVIES_SUCCESS, payload: {movies, totalMovies, totalPages, page: _page, }})
  } catch (error) {
    console.error(error)
    dispatch({type: LOAD_MOVIES_FAILURE, payload: error.message});
  }
}
