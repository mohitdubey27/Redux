import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../assets/colors';
import CommonAlert from '../../component/CommonAlert';
import Icon from '../../component/Icons';
import Loader from '../../component/Loader';
import {AddContacts} from '../../constants/RoutesName';
import {
  clearDeleteContactState,
  deleteContactAction,
} from '../../Redux/actions/deleteContactAction';
import getContactListAction from '../../Redux/actions/getConatctListAction';
import {
  clearReadContactState,
  readContactAction,
} from '../../Redux/actions/readContactAction';
import styles from './styles';

const Contacts = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [contactId, setContactId] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {getContactStatus, contactList} = useSelector(
    state => state.getContactListReduder,
  );

  const {readContactStatus} = useSelector(state => state.readContactReducer);

  const {deleteContactStatus} = useSelector(
    state => state.deleteContactReducer,
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getContactListAction());
      dispatch(clearReadContactState());
      dispatch(clearDeleteContactState());
    }, [dispatch]),
  );

  const onEdit = id => {
    dispatch(readContactAction(id));
  };

  if (readContactStatus === 'loaded') {
    navigation.navigate(AddContacts, {from: 'Edit'});
  } else if (readContactStatus === 'error') {
    Toast.show('Something went wrong');
  }

  const onDelete = id => {
    setOpenAlert(true);
    setContactId(id);
  };

  const onConfirmDelete = () => {
    setOpenAlert(false);
    dispatch(deleteContactAction(contactId));
    setContactId(null);
    dispatch(getContactListAction());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Contacts</Text>
      <View style={styles.HeaderSeperator} />
      <View style={{flex: 1}}>
        {contactList.length > 0 ? (
          <FlatList
            data={contactList}
            renderItem={({item}) => (
              <View style={styles.contactContainer}>
                <View style={styles.contactButton}>
                  <Icon
                    type="fa"
                    name="user-circle"
                    size={40}
                    color={colors.rebeccapurple}
                  />
                  <View>
                    <Text style={styles.name}>
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text style={styles.number}>
                      +{item.country_code} {item.phone_number}
                    </Text>
                  </View>
                </View>
                <View style={styles.contactButton}>
                  <TouchableOpacity onPress={() => onEdit(item.id)}>
                    <Icon
                      name="account-edit"
                      type="materialCommunity"
                      size={35}
                      color={colors.rebeccapurple}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Icon
                      name="remove-user"
                      type="entypo"
                      size={30}
                      color={colors.rebeccapurple}
                      style={{marginLeft: 20}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.contactSeperator} />
            )}
          />
        ) : (
          <View style={styles.noRecordView}>
            <Text>No contacts found</Text>
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(AddContacts)}>
        <Icon
          size={30}
          name="phone-plus"
          type="materialCommunity"
          color={colors.rebeccapurple}
        />
      </TouchableOpacity>
      {(getContactStatus === 'loading' ||
        readContactStatus === 'loading' ||
        deleteContactStatus === 'loading') && <Loader />}
      {openAlert && (
        <CommonAlert
          alertTitle="Delete Alert"
          alertMessage="Are you sure, you want to delete this contact?"
          onPressOK={onConfirmDelete}
          onClose={() => setOpenAlert(false)}
        />
      )}
    </SafeAreaView>
  );
};

export default Contacts;
