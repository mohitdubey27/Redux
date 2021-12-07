import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.azure,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.rebeccapurple,
    marginLeft: 20,
  },
  HeaderSeperator: {
    height: 1,
    marginTop: 10,
    backgroundColor: colors.rebeccapurple,
    width: '100%',
  },
  contactContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.rebeccapurple,
    marginLeft: 15,
  },
  number: {
    fontSize: 14,
    color: colors.darkslateblue,
    marginLeft: 15,
  },
  contactSeperator: {
    height: 0.8,
    backgroundColor: colors.gray,
    alignSelf: 'center',
    width: '90%',
  },
  noRecordView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
