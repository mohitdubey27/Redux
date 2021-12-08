import {
  CLEAR_EDIT_CONTACT_STATE,
  EDIT_CONTACT_ERROR,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../actionTypes';

const inittialState = {
  editContactStatus: 'notLoaded',
  editContactResponse: [],
  editContactError: null,
};

const editContactReducer = (state = inittialState, action) => {
  switch (action.type) {
    case EDIT_CONTACT_LOADING:
      return {
        ...state,
        editContactStatus: 'loading',
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        editContactStatus: 'loaded',
        editContactResponse: action.payload,
      };
    case EDIT_CONTACT_ERROR:
      return {
        ...state,
        editContactStatus: 'error',
        editContactError: action.payload,
      };
    case CLEAR_EDIT_CONTACT_STATE:
      return inittialState;
    default:
      return state;
  }
};

export default editContactReducer;
