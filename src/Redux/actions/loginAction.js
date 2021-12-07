import axiosRequest from '../../utils/axiosRequest';
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../actionTypes/registerType';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginAction = data => async dispatch => {
  dispatch({type: LOGIN_LOADING});
  try {
    const response = await axiosRequest.post('auth/login', data);
    console.log('LOGIN RESPONSE==>', response);
    await AsyncStorage.setItem('token', response?.token);
    await AsyncStorage.setItem('user', JSON.stringify(response?.user));
    dispatch({type: LOGIN_SUCCESS, payload: response});
  } catch (error) {
    console.log('LOGIN ERROR==>', error);
    dispatch({type: LOGIN_ERROR, payload: error.data});
  }
};

export default loginAction;
