import React from 'react';
import {Alert} from 'react-native';

const CommonAlert = ({alertTitle, alertMessage, onPressOK, onClose}) => {
  Alert.alert(alertTitle, alertMessage, [
    {
      text: 'NO',
      onPress: onClose,
    },
    {
      text: 'YES',
      onPress: onPressOK,
    },
  ]);
  return null;
};

export default CommonAlert;
