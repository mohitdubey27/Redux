import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import BackButton from '../../component/BackButton';
import Icon from '../../component/Icons';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import InputField from '../../component/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker from 'react-native-country-picker-modal';

const CreateContact = () => {
  const [countryCode, setCountryCode] = useState(null);
  const navigation = useNavigation();
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
              //value={values.Username}
              //onChangeText={handleChange('Username')}
              //error={errors.Username}
              //serverError={registerError?.username?.[0]}
              //touch={touched.Username}
            />
          </View>
          <View style={styles.inputContainer}>
            <InputField
              id="last_name"
              infoWidth="23%"
              infoText="LAST NAME"
              placeholder="Lastname"
              //value={values.Username}
              //onChangeText={handleChange('Username')}
              //error={errors.Username}
              //serverError={registerError?.username?.[0]}
              //touch={touched.Username}
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
                //value={values.Username}
                //onChangeText={handleChange('Username')}
                //error={errors.Username}
                //serverError={registerError?.username?.[0]}
                //touch={touched.Username}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CreateContact;
