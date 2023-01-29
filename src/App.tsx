import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './libraries/StateManagement'
import {RootNavigator} from './navigation/screen';
import type {} from 'redux-thunk/extend-redux'

const App = () => (
    <SafeAreaProvider>
        <Provider store={store}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </Provider>
    </SafeAreaProvider>
  );

export default App;
