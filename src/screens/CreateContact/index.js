import React, {useCallback, useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import BackButton from '../../component/BackButton';
import Icon from '../../component/Icons';
import styles from './styles';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
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
import getCountryCode from '../../utils/getCountryCode';
import {
  clearEditContactState,
  editContactAction,
} from '../../Redux/actions/editContactAction';

const CreateContact = () => {
  const [countryCode, setCountryCode] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const routes = useRoute();
  const from = routes.params?.from;

  const {createContactStatus, createContactResponse, error} = useSelector(
    state => state.createContactReducer,
  );

  const {contactData, readContactError} = useSelector(
    state => state.readContactReducer,
  );

  const {editContactStatus, editContactResponse, editContactError} =
    useSelector(state => state.editContactReducer);

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(clearCreateContactAction());
        dispatch(clearEditContactState());
      };
    }, [dispatch]),
  );

  if (createContactStatus === 'loaded') {
    navigation.goBack(null);
  }
  if (editContactStatus === 'loaded') {
    navigation.goBack(null);
  }

  const {values, errors, touched, handleChange, handleSubmit, setFieldValue} =
    useFormik({
      validationSchema: createContactSchema,
      initialValues: {
        first_name: contactData?.first_name,
        last_name: contactData?.last_name,
        country_code: contactData?.country_code,
        phone_number: contactData?.phone_number,
        is_favorite: contactData?.is_favorite,
      },
      onSubmit: data => {
        if (from === 'Edit') {
          const sendData = {
            ...data,
            id: contactData.id,
          };
          dispatch(editContactAction(sendData));
        } else {
          dispatch(createContactAction(data));
        }
      },
    });

  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={() => navigation.goBack(null)} />
      <KeyboardAwareScrollView>
        <View style={styles.headerIcon}>
          <Icon
            size={80}
            name={from === 'Edit' ? 'account-edit' : 'phone-plus'}
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
                  const phoneCode =
                    value.callingCode[0] || contactData?.country_code;
                  const cCode = value.cca2;
                  setCountryCode(cCode || contactData?.country_code);
                  setFieldValue('country_code', phoneCode);
                }}
                withFilter
                withAlphaFilter
                withCallingCode
                countryCode={
                  countryCode ||
                  (contactData?.country_code &&
                    getCountryCode(`+${contactData?.country_code}`))
                }
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
          <Button
            title={from == 'Edit' ? 'Edit Contact' : 'Add Contact'}
            onPress={handleSubmit}
          />
        </View>
      </KeyboardAwareScrollView>
      {(createContactStatus === 'loading' ||
        editContactStatus === 'loading') && <Loader />}
    </SafeAreaView>
  );
};

export default CreateContact;
