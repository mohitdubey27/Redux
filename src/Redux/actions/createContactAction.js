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
    console.log('CREATE CONTACT RESPONSE==>', response);
    dispatch({type: CREATE_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    console.log('CREATE CONTACT ERROR==>', error);
    dispatch({type: CREATE_CONTACT_ERROR, payload: error.data});
  }
};

const clearCreateContactAction = () => dispatch => {
  console.log('CFSFASAASSA');
  dispatch({type: CLEAR_CREATE_CONTACT_STATE});
};

export {createContactAction, clearCreateContactAction};
