import {
  READ_CONTACT_SUCCESS,
  READ_CONTACT_LOADING,
  READ_CONTACT_ERROR,
  CLEAR_READ_CONTACT_STATE,
} from '../actionTypes';

const initialState = {
  readContactStatus: 'notLoaded',
  contactData: [],
  readContactError: null,
};

const readContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_CONTACT_LOADING:
      return {
        ...state,
        readContactStatus: 'loading',
      };
    case READ_CONTACT_SUCCESS:
      return {
        ...state,
        readContactStatus: 'loaded',
        contactData: action.payload,
      };
    case READ_CONTACT_ERROR:
      return {
        ...state,
        readContactStatus: 'error',
        contactData: [],
        readContactError: action.payload,
      };
    case CLEAR_READ_CONTACT_STATE:
      return initialState;
    default:
      return state;
  }
};

export default readContactReducer;
