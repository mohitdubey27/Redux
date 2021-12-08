import {
  CLEAR_DELETE_CONTACT_STATE,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../actionTypes';

const initialState = {
  deleteContactStatus: 'notLoaded',
  deleteContactResponse: [],
  deleteContactError: null,
};

const deleteContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT_LOADING:
      return {
        ...state,
        deleteContactStatus: 'loading',
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteContactStatus: 'loaded',
        deleteContactResponse: action.payload,
      };
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        deleteContactStatus: 'error',
        deleteContactError: action.payload,
      };
    case CLEAR_DELETE_CONTACT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default deleteContactReducer;
