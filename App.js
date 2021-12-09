import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Splash from './src/screens/Splash';

const App = () => {
  return (
    <Provider store={store}>
      <Splash />
    </Provider>
  );
};

export default App;
