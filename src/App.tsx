import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/screen';

const App = () => (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );

export default App;
