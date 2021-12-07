import {
  CLEAR_LOGIN_STATE,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../actionTypes';

const loginReducers = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        loginLoadingStatus: 'loading',
      };
    case LOGIN_SUCCESS:
      return {
        loginLoadingStatus: 'loaded',
        userDetails: action.payload,
      };
    case LOGIN_ERROR:
      return {
        loginLoadingStatus: 'error',
        error: action.payload,
      };
    case CLEAR_LOGIN_STATE:
      return state;
    default:
      return state;
  }
};

export default loginReducers;
