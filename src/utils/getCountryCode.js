import CountryCode from './CountryCode';

const getCountryCode = code => {
  let countryKey = CountryCode.find(val => {
    return val.value === code && val.key;
  });
  return countryKey.key.toUpperCase();
};

export default getCountryCode;
