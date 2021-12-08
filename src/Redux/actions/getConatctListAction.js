import axiosRequest from '../../utils/axiosRequest';
import {
  GET_CONTACT_ERROR,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
} from '../actionTypes';

const getContactListAction = () => async dispatch => {
  dispatch({type: GET_CONTACT_LOADING});
  try {
    const response = await axiosRequest.get('contacts/');
    dispatch({type: GET_CONTACT_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: GET_CONTACT_ERROR, payload: error.data});
  }
};

export default getContactListAction;
