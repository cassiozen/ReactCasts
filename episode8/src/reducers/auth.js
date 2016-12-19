import { AUTH_REQUEST, AUTH_SUCCESS } from '../constants';

const auth = (state = { user: {} }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({ isFetching: true } ,state);
    case AUTH_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const selectUserName = (state) => {

  let userTitle;
  if (state.user) {
    if (state.user.gender === "Male") {
      userTitle = "Mr.";
    } else if (state.user.maritalStatus === "Married") {
      userTitle = "Mrs.";
    } else {
      userTitle = "Miss";
    }
  }

  return `${userTitle} ${state.user.firstName} ${state.user.lastName}`;
}

export default auth;
