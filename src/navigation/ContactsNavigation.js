import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts';
import {AddContacts, MyContacts} from '../constants/RoutesName';
import {NavigationContainer} from '@react-navigation/native';
import CreateContact from '../screens/CreateContact';

const ContactsNavigation = () => {
  const ContactStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <ContactStack.Navigator screenOptions={{headerShown: false}}>
        <ContactStack.Screen name={MyContacts} component={Contacts} />
        <ContactStack.Screen name={AddContacts} component={CreateContact} />
      </ContactStack.Navigator>
    </NavigationContainer>
  );
};

export default ContactsNavigation;
