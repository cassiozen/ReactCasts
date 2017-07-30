import "isomorphic-fetch";

// Actions
const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return { ...state, news: action.payload };

    default:
      return state;
  }
}

// Action Creators
const requestNews = () => ({ type: FETCH_NEWS_REQUEST });
const receivedNews = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
const newsError = () => ({ type: FETCH_NEWS_FAILURE });

export const fetchNews = () => (dispatch, getState) => {
  dispatch(requestNews());
  return fetch("http://localhost:3000/api/news")
    .then(response => response.json())
    .then(news => dispatch(receivedNews(news)))
    .catch(err => dispatch(newsError(err)));
};
