import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {Login, Register} from '../constants/RoutesName';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName={Login}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={Login} component={LoginScreen} />
      <AuthStack.Screen name={Register} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
