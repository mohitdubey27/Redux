import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contacts from '../screens/Contacts';
import {AddContacts, MyContacts} from '../constants/RoutesName';
import CreateContact from '../screens/CreateContact';

const drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => <></>}>
      <drawer.Screen name={MyContacts} component={Contacts} />
      <drawer.Screen name={AddContacts} component={CreateContact} />
    </drawer.Navigator>
  );
};

export default DrawerNavigation;
