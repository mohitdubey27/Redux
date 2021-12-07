import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../assets/colors';
import Icon from './Icons';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Icon
        name="keyboard-backspace"
        type="material"
        size={30}
        color={colors.rebeccapurple}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
