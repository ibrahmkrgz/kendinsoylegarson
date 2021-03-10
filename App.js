import React from 'react';
import { Provider } from 'react-redux';
import { setTopLevelNavigator } from './src/services/navigationService';
import { Root } from 'native-base';

import ApplicationContainers from './src/containers/applicationContainers';


import App from './src/config/routes';


export default () => {
  return (
    <App />
  );
};
