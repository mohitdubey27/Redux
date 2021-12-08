import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../assets/colors';
import Icon from '../../component/Icons';
import Loader from '../../component/Loader';
import {AddContacts, EditContact} from '../../constants/RoutesName';
import getContactListAction from '../../Redux/actions/getConatctListAction';
import styles from './styles';

const Contacts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {getContactStatus, contactList, error} = useSelector(
    state => state.getContactListReduder,
  );

  useFocusEffect(
    useCallback(() => {
      dispatch(getContactListAction());
    }, [dispatch]),
  );

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
                <TouchableOpacity style={styles.contactButton}>
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
                </TouchableOpacity>
                <View style={styles.contactButton}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(AddContacts, {from: 'Edit'})
                    }>
                    <Icon
                      name="account-edit"
                      type="materialCommunity"
                      size={35}
                      color={colors.rebeccapurple}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
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
      {getContactStatus === 'loading' && <Loader />}
    </SafeAreaView>
  );
};

export default Contacts;
