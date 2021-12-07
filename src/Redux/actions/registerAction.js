import axios from 'axios';
import axiosRequest from '../../utils/axiosRequest';
import {
  CLEAR_REGISTER_STATE,
  REGISTER_ERROR,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../actionTypes';

const registerAction = data => async dispatch => {
  dispatch({type: REGISTER_LOADING});

  try {
    const sendData = {
      username: data.Username,
      first_name: data.FirstName,
      last_name: data.LastName,
      email: data.Email,
      password: data.Password,
    };
    const response = await axiosRequest.post('auth/register', sendData);
    console.log('RESPONSE==>', response);
    dispatch({type: REGISTER_SUCCESS, payload: response});
  } catch (error) {
    dispatch({type: REGISTER_ERROR, payload: error.data});
  }
};

const clearRegisterAction = () => dispatch => {
  dispatch({type: CLEAR_REGISTER_STATE});
};

export {registerAction, clearRegisterAction};
