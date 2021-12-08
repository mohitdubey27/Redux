import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.azure,
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  phoneNumberView: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  countryCode: {
    height: 45,
    width: 80,
    borderColor: colors.rebeccapurple,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  isFavoriteText: {
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 10,
  },
  addContactButtonView: {
    marginVertical: 25,
  },
});
