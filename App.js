import 'react-native-gesture-handler'
import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { setTopLevelNavigator } from './src/services/navigationService';
import { Root } from 'native-base';

import ApplicationContainers from './src/containers/applicationContainers';

enableScreens();

import App from './src/config/routes';


export default () => {
  return (
    <Root>

      <App />
    </Root>
  );
};
