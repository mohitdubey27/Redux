import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import colors from '../../assets/colors';
import Icon from '../../component/Icons';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ContactsNavigation from '../../navigation/ContactsNavigation';
import AuthNavigation from '../../navigation/AuthNavigation';

const height = Dimensions.get('window').height;

const Splash = () => {
  const [isAuthorize, setIsAuthorize] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const checkUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsAuthorize(true);
    }
  };

  useEffect(() => {
    checkUser();
    setTimeout(() => {
      setIsWait(true);
    }, 5000);
  }, []);

  return isWait ? (
    isAuthorize ? (
      <ContactsNavigation />
    ) : (
      <AuthNavigation />
    )
  ) : (
    <View style={styles.container}>
      <Icon
        name="landline"
        type="entypo"
        size={height / 2.5}
        color={colors.rebeccapurple}
      />
    </View>
  );
};

export default Splash;
