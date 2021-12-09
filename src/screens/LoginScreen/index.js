import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import colors from '../../assets/colors';
import Button from '../../component/Button';
import Icon from '../../component/Icons';
import InputField from '../../component/InputField';
import {Register} from '../../constants/RoutesName';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {useFormik} from 'formik';
import {LoginSchema} from '../../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import loginAction from '../../Redux/actions/loginAction';
import Loader from '../../component/Loader';
import DrawerNavigation from '../../navigation/DrawerNavigation';

const LoginScreen = () => {
  const navigation = useNavigation();
  const {loginLoadingStatus, error} = useSelector(state => state.loginReducers);
  const dispatch = useDispatch();

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: data => {
      dispatch(loginAction(data));
    },
  });

  if (loginLoadingStatus === 'loaded') {
    return <DrawerNavigation />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerIcon}>
        <Icon
          size={150}
          type="entypo"
          name="user"
          color={colors.rebeccapurple}
        />
      </View>
      {error?.detail && <Text style={styles.errorText}>{error.detail}</Text>}
      <View style={styles.inputContainer}>
        <InputField
          id="username"
          infoWidth="23%"
          infoText="USERNAME"
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange('username')}
          error={errors.username}
          touch={touched.username}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          id="password"
          infoWidth="23%"
          infoText="PASSWORD"
          placeholder="Password"
          value={values.password}
          isSecureEntry={true}
          onChangeText={handleChange('password')}
          error={errors.password}
          touch={touched.password}
        />
      </View>
      <View>
        <Button title="Login" onPress={handleSubmit} />
      </View>
      <View style={styles.newUserView}>
        <Text>Are you a new user?</Text>
        <Text
          style={styles.registerText}
          onPress={() => navigation.navigate(Register)}>
          Register
        </Text>
      </View>
      {loginLoadingStatus === 'loading' && <Loader />}
    </SafeAreaView>
  );
};

export default LoginScreen;
