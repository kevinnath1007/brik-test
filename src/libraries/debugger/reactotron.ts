import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron, {openInEditor, networking} from 'reactotron-react-native';
// @ts-ignore
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
// eslint-disable-next-line import/no-cycle
import {Reactotron} from './reactotron.interface';

// @ts-ignore
export const reactotronInstance: Reactotron = reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'Brick - test',
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(openInEditor())
  .use(
    networking({
      ignoreUrls: /localhost/
    })
  )

if (__DEV__) {
  reactotronInstance.clear();
  reactotronInstance.connect();
}

global.console.tron = reactotronInstance;
