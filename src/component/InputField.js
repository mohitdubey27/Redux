import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import colors from '../assets/colors';

const InputField = ({
  placeholder,
  value,
  onChangeText,
  infoText,
  infoWidth,
  isSecureEntry,
  error,
  id,
  touch,
  serverError,
}) => {
  const [infoVisible, setInfoVisible] = useState(false);
  return (
    <View>
      <View style={styles.textInputContainer}>
        <TextInput
          name={id}
          placeholder={placeholder}
          value={value}
          style={styles.input}
          secureTextEntry={isSecureEntry}
          onChangeText={onChangeText}
          onFocus={() => setInfoVisible(true)}
          onBlur={() => value === '' && setInfoVisible(false)}
        />
        {infoVisible && (
          <View style={[styles.infoTextView, {width: infoWidth}]}>
            <Text style={styles.infoText}>{infoText}</Text>
          </View>
        )}
      </View>
      {((error && touch) || serverError) && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{error || serverError}</Text>
        </View>
      )}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  textInputContainer: {
    height: 70,
  },
  input: {
    height: 45,
    padding: 10,
    borderColor: colors.rebeccapurple,
    borderWidth: 1,
    borderRadius: 5,
  },
  infoTextView: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.rebeccapurple,
    paddingHorizontal: 5,
    height: 20,
    marginLeft: 10,
    backgroundColor: colors.azure,
    marginTop: -60,
  },
  infoText: {
    fontSize: 13,
    color: colors.rebeccapurple,
  },
  errorText: {
    marginTop: -25,
    color: colors.red,
  },
  errorView: {
    height: 10,
  },
});
