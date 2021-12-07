import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../assets/colors';

const Loader = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator
        size="large"
        style={styles.loader}
        color={colors.rebeccapurple}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderView: {
    height: '100%',
    backgroundColor: '#F5F5F550',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loader: {
    height: '100%',
    width: '100%',
  },
});

export default Loader;
