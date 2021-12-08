import axiosRequest from '../../utils/axiosRequest';
import {
  CLEAR_DELETE_CONTACT_STATE,
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../actionTypes';

const deleteContactAction = data => async dispatch => {
  dispatch({type: DELETE_CONTACT_LOADING});
  try {
    const response = await axiosRequest.delete(`contacts/${data}`);
    dispatch({type: DELETE_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: DELETE_CONTACT_ERROR, payload: error.data});
  }
};

const clearDeleteContactState = () => dispatch => {
  dispatch({type: CLEAR_DELETE_CONTACT_STATE});
};

export {deleteContactAction, clearDeleteContactState};
