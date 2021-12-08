import React, {useCallback, useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import BackButton from '../../component/BackButton';
import Icon from '../../component/Icons';
import styles from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import InputField from '../../component/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker from 'react-native-country-picker-modal';
import Button from '../../component/Button';
import {useFormik} from 'formik';
import {createContactSchema} from '../../utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../component/Loader';
import {
  clearCreateContactAction,
  createContactAction,
} from '../../Redux/actions/createContactAction';

const CreateContact = () => {
  const [countryCode, setCountryCode] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {createContactStatus, createContactResponse, error} = useSelector(
    state => state.createContactReducer,
  );

  console.log('CREATE CONTACT==', {
    createContactStatus,
    createContactResponse,
    error,
  });

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(clearCreateContactAction());
      };
    }, [dispatch]),
  );

  if (createContactStatus === 'loaded') {
    navigation.goBack(null);
  }

  const {values, errors, touched, handleChange, handleSubmit, setFieldValue} =
    useFormik({
      validationSchema: createContactSchema,
      initialValues: {
        first_name: '',
        last_name: '',
        country_code: '',
        phone_number: '',
        is_favorite: false,
      },
      onSubmit: data => {
        dispatch(createContactAction(data));
      },
    });

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={() => navigation.goBack(null)} />
      <KeyboardAwareScrollView>
        <View style={styles.headerIcon}>
          <Icon
            size={80}
            name="phone-plus"
            type="materialCommunity"
            color={colors.rebeccapurple}
          />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <InputField
              id="first_name"
              infoWidth="23%"
              infoText="FIRST NAME"
              placeholder="Firstname"
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              error={errors.first_name}
              //serverError={registerError?.username?.[0]}
              touch={touched.first_name}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="last_name"
              infoWidth="23%"
              infoText="LAST NAME"
              placeholder="Lastname"
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              error={errors.last_name}
              //serverError={registerError?.username?.[0]}
              touch={touched.last_name}
            />
          </View>
          <View style={styles.phoneNumberView}>
            <TouchableOpacity style={styles.countryCode}>
              <CountryPicker
                onSelect={value => {
                  console.log('SELCETE===', value);
                  const phoneCode = value.callingCode[0];
                  const cCode = value.cca2;
                  setCountryCode(cCode);
                  setFieldValue('country_code', phoneCode);
                }}
                withFilter
                withAlphaFilter
                withCallingCode
                countryCode={countryCode}
                withCallingCodeButton
                withFlagButton={false}
              />
            </TouchableOpacity>
            <View style={[styles.inputContainer, {width: '73%'}]}>
              <InputField
                id="phone_number"
                infoWidth="43%"
                infoText="PHONE NUMBER"
                placeholder="Phonenumber"
                value={values.phone_number}
                onChangeText={handleChange('phone_number')}
                error={errors.phone_number || errors.country_code}
                //serverError={registerError?.username?.[0]}
                touch={touched.phone_number}
              />
            </View>
          </View>
          <View style={styles.favoriteView}>
            <TouchableOpacity
              onPress={() => setFieldValue('is_favorite', !values.is_favorite)}>
              {values.is_favorite ? (
                <Icon
                  name="heart"
                  type="ant"
                  size={30}
                  color={colors.rebeccapurple}
                />
              ) : (
                <Icon
                  name="hearto"
                  type="ant"
                  size={30}
                  color={colors.rebeccapurple}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.isFavoriteText}>is Favorite?</Text>
          </View>
        </View>
        <View style={styles.addContactButtonView}>
          <Button title="Add Contact" onPress={handleSubmit} />
        </View>
      </KeyboardAwareScrollView>
      {createContactStatus === 'loading' && <Loader />}
    </SafeAreaView>
  );
};

export default CreateContact;
