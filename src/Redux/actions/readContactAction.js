import axiosRequest from '../../utils/axiosRequest';
import {
  READ_CONTACT_SUCCESS,
  READ_CONTACT_ERROR,
  READ_CONTACT_LOADING,
  CLEAR_READ_CONTACT_STATE,
} from '../actionTypes';

const readContactAction = data => async dispatch => {
  dispatch({type: READ_CONTACT_LOADING});
  try {
    const response = await axiosRequest.get(`/contacts/${data}`);
    dispatch({type: READ_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: READ_CONTACT_ERROR, payload: error.data});
  }
};

const clearReadContactState = () => dispatch => {
  dispatch({type: CLEAR_READ_CONTACT_STATE});
};

export {readContactAction, clearReadContactState};
