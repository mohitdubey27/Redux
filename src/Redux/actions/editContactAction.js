import axiosRequest from '../../utils/axiosRequest';
import {
  CLEAR_EDIT_CONTACT_STATE,
  EDIT_CONTACT_ERROR,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from '../actionTypes';

const editContactAction = data => async dispatch => {
  console.log('DATA===>', data);
  dispatch({type: EDIT_CONTACT_LOADING});
  try {
    const response = await axiosRequest.put(`contacts/${data.id}`, data);
    console.log('EDIT CONTACT RESPONSE====', response);
    dispatch({type: EDIT_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    console.log('EDIT CONTACT ERROR====', error.data);
    dispatch({type: EDIT_CONTACT_ERROR, payload: error.data});
  }
};

const clearEditContactState = () => dispatch => {
  dispatch({type: CLEAR_EDIT_CONTACT_STATE});
};

export {editContactAction, clearEditContactState};
