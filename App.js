import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreLogs(["new NativeEventEmitter()"]);
LogBox.ignoreLogs(["`new NativeEventEmitter()"]);
LogBox.ignoreLogs(["`new NativeEventEmitter"]);

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createMDCNavigator, MDCBundle } from 'mdcx-components';
import * as MDC from 'mdcx-framework';
import * as Screen from './src/screens';

MDC.gui.topbar.backgroundColor('#fafafa');

import resources from './assets/resources/resources.json';

const MDCStack = createMDCNavigator();

MDC.localization.resources(resources);

class MDCTemplate extends MDCBundle {

  bundleDidLoad(params){
    MDC.logger.info("bundleDidLoad()", params);

    console.log(params);
  }

  bundleDidShow(params){
    MDC.logger.info("bundleDidShow()", params);

    console.log(params);
  }

  bundleShouldHide(callback){
    MDC.logger.info("bundleShouldHide()");

    callback();
  }

  render() {
    return (
      <NavigationContainer>
        <MDCStack.Navigator initialRouteName="HomeScreen">
          <MDCStack.Screen name="Home" component={Screen.HomeScreen} options={{ title: "Contatti" }} />
          <MDCStack.Screen name="Elements" component={Screen.ElementsScreen} options={{ title: "UI Elements" }} />
          <MDCStack.Screen name="Inputs" component={Screen.InputsScreen} options={{ title: "Inputs" }} />
        </MDCStack.Navigator>
      </NavigationContainer>
    )
  }
}

export default MDCTemplate;
