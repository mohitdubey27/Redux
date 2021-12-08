import axios from 'axios';
import {BASE_URL} from '../constants/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosRequest = axios.create({
  baseURL: BASE_URL,
});

//All response from axios
axiosRequest.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      if (error.response.status === 403) {
        //navigate(RouteName.LOGOUT, { tokenExpired: true });
      } else {
        return new Promise((resolve, reject) => {
          reject(error.response);
        });
      }
    }
    return Promise.reject(error);
  },
);

// All request from axios
axiosRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosRequest;
