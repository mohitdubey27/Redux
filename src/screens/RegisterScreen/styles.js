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
  newUserView: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.rebeccapurple,
    paddingHorizontal: 20,
  },
});
