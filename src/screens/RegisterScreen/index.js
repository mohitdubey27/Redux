import React, {useCallback} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BackButton from '../../component/BackButton';
import InputField from '../../component/InputField';
import styles from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import Icon from '../../component/Icons';
import colors from '../../assets/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../component/Button';
import {useFormik} from 'formik';
import {RegisterSchema} from '../../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearRegisterAction,
  registerAction,
} from '../../Redux/actions/registerAction';
import Toast from 'react-native-simple-toast';
import Loader from '../../component/Loader';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {registerLoadingStatus, registerError} = useSelector(
    state => state.registerReducer,
  );

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      Username: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
    },
    onSubmit: (data, {resetForm}) => {
      dispatch(registerAction(data)).then(res => {
        console.log('RESPONSE', res);
      });
      resetForm();
    },
    validationSchema: RegisterSchema,
  });

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(clearRegisterAction());
      };
    }, [dispatch]),
  );

  if (registerLoadingStatus === 'loaded') {
    console.log('INSIDE IF');
    Toast.show('Your have registered successfully.');
    navigation.goBack(null);
  } else if (registerLoadingStatus === 'error') {
    console.log('INSIDE ELSE IF');
    Toast.show('Server Error');
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={() => navigation.goBack(null)} />
      <KeyboardAwareScrollView>
        <View style={styles.headerIcon}>
          <Icon
            size={100}
            type="entypo"
            name="add-user"
            color={colors.rebeccapurple}
          />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <InputField
              id="Username"
              infoWidth="23%"
              infoText="USERNAME"
              placeholder="Username"
              value={values.Username}
              onChangeText={handleChange('Username')}
              error={errors.Username}
              serverError={registerError?.username?.[0]}
              touch={touched.Username}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="FirstName"
              infoWidth="23%"
              infoText="FIRST NAME"
              placeholder="Firstname"
              value={values.FirstName}
              onChangeText={handleChange('FirstName')}
              error={errors.FirstName}
              serverError={registerError?.first_name?.[0]}
              touch={touched.FirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="LastName"
              infoWidth="23%"
              infoText="LAST NAME"
              placeholder="Lastname"
              value={values.LastName}
              onChangeText={handleChange('LastName')}
              error={errors.LastName}
              serverError={registerError?.last_name?.[0]}
              touch={touched.LastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="Email"
              infoWidth="13%"
              infoText="EMAIL"
              placeholder="Email"
              value={values.Email}
              onChangeText={handleChange('Email')}
              error={errors.Email}
              serverError={registerError?.email?.[0]}
              touch={touched.Email}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="Password"
              infoWidth="23%"
              infoText="PASSWORD"
              placeholder="Password"
              value={values.Password}
              isSecureEntry={true}
              onChangeText={handleChange('Password')}
              error={errors.Password}
              serverError={registerError?.password?.[0]}
              touch={touched.Password}
            />
          </View>
        </View>
        <View>
          <Button title="Register" onPress={handleSubmit} />
        </View>
        <View style={styles.newUserView}>
          <Text>You have already an account?</Text>
          <Text
            style={styles.registerText}
            onPress={() => navigation.goBack(null)}>
            Login
          </Text>
        </View>
      </KeyboardAwareScrollView>
      {registerLoadingStatus === 'loading' && <Loader />}
    </SafeAreaView>
  );
};

export default RegisterScreen;
