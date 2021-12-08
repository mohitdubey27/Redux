import {
  CLEAR_CREATE_CONTACT_STATE,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../actionTypes';
import axiosRequest from '../../utils/axiosRequest';

const createContactAction = data => async dispatch => {
  dispatch({type: CREATE_CONTACT_LOADING});
  try {
    const response = await axiosRequest.post('contacts/', data);
    dispatch({type: CREATE_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: CREATE_CONTACT_ERROR, payload: error.data});
  }
};

const clearCreateContactAction = () => dispatch => {
  dispatch({type: CLEAR_CREATE_CONTACT_STATE});
};

export {createContactAction, clearCreateContactAction};
