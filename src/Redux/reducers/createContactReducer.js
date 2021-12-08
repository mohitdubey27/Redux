import {
  CLEAR_CREATE_CONTACT_STATE,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../actionTypes';

const createContactReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CONTACT_LOADING:
      return {
        createContactStatus: 'loading',
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        createContactStatus: 'loaded',
        createContactResponse: action.payload,
      };
    case CREATE_CONTACT_ERROR:
      return {
        createContactStatus: 'error',
        error: action.payload,
      };
    case CLEAR_CREATE_CONTACT_STATE:
      return {
        createContactStatus: 'notloaded',
        error: null,
      };
    default:
      return state;
  }
};

export default createContactReducer;
