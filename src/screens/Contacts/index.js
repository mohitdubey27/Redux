import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';
import Icon from '../../component/Icons';
import {AddContacts} from '../../constants/RoutesName';
import styles from './styles';

const data = [
  {
    name: 'Mohit Dubey',
    number: '8299187732',
    countryCode: '+91',
  },
  {
    name: 'Mohit Dubey',
    number: '8299187732',
    countryCode: '+91',
  },
  {
    name: 'Mohit Dubey',
    number: '8299187732',
    countryCode: '+91',
  },
  {
    name: 'Mohit Dubey',
    number: '8299187732',
    countryCode: '+91',
  },
  {
    name: 'Mohit Dubey',
    number: '8299187732',
    countryCode: '+91',
  },
];

const Contacts = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Contacts</Text>
      <View style={styles.HeaderSeperator} />
      <View style={{flex: 1}}>
        {data.length > 0 ? (
          <FlatList
            data={data}
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
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.number}>
                      {item.countryCode} {item.number}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.contactButton}>
                  <TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default Contacts;
