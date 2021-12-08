import {
  GET_CONTACT_ERROR,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../actionTypes';
const initialState = {
  getContactStatus: 'notloaded',
  contactList: [],
  error: null,
};
const getContactListReduder = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT_LOADING:
      return {
        ...state,
        getContactStatus: 'loading',
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        getContactStatus: 'loaded',
        contactList: action.payload,
      };
    case GET_CONTACT_ERROR:
      return {
        ...state,
        getContactStatus: 'error',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getContactListReduder;
