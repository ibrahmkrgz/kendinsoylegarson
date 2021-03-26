import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { setTopLevelNavigator } from './src/services/navigationService';
import { Root } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import ApplicationContainers from './src/containers/applicationContainers';

enableScreens();

import App2 from './src/config/routes';

const App = () => {
  useEffect(() => {
    console.log("hideeee")
    SplashScreen.hide();
  });

  return (
    <Root>

      <App2 />
    </Root>
  );
}
export default App;
