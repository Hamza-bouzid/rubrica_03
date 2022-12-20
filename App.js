import { LogBox } from 'react-native';

LogBox.ignoreLogs(['EventEmitter.removeListener']);
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreLogs(['new NativeEventEmitter()']);
LogBox.ignoreLogs(['`new NativeEventEmitter()']);
LogBox.ignoreLogs(['`new NativeEventEmitter']);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMDCNavigator, MDCBundle } from 'mdcx-components';
import * as MDC from 'mdcx-framework';
import * as Screen from './src/screens';

MDC.gui.topbar.backgroundColor('#fafafa');

import resources from './assets/resources/resources.json';

import NavigationScreen from './src/screens/NavigationScreen';

const MDCStack = createMDCNavigator();

MDC.localization.resources(resources);

class MDCTemplate extends MDCBundle {
  

  render() {
    return (
      <NavigationContainer>
        <NavigationScreen />
      </NavigationContainer>
    );
  }
}

export default MDCTemplate;
