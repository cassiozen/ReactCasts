import { 
  LOG_USER, LOGGED_USER, USER_FAILURE
} from '../constants';

const userLoading = id => ({ type: LOG_USER, payload: id });
const userLoaded = user => ({ type: LOGGED_USER, payload: user });
const userLoadError = () => ({ type: USER_FAILURE });

export const getUser = () => (
  (dispatch, getState, api) => {
    dispatch(userLoading);
    return api.getUser()
    .then(user => {
      dispatch( userLoaded(user) );
      return user;
    })
    .catch(err => {
      dispatch( userLoadError() );
    });
  }
);
