import {
  CLEAR_REGISTER_STATE,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../actionTypes/registerType';

const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        registerLoadingStatus: 'loading',
      };
    case REGISTER_SUCCESS:
      return {
        registerLoadingStatus: 'loaded',
      };
    case REGISTER_ERROR:
      return {
        registerLoadingStatus: 'error',
        registerError: action.payload,
      };
    case CLEAR_REGISTER_STATE:
      return {
        registerLoadingStatus: 'notLoaded',
        registerError: null,
      };
    default:
      return state;
  }
};

export default registerReducer;
