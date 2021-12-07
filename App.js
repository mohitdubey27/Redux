import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import AuthNavigation from './src/navigation/AuthNavigation';
import store from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
