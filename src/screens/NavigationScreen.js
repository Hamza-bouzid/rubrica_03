import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as MDC from 'mdcx-framework';
import { createMDCNavigator, MDCBundle } from 'mdcx-components';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import * as Screen from '../screens';
import NavBar from '../components/NavBar';

const NavigationScreen = (props) => {
  const MDCStack = createMDCNavigator();

  const navigation = useNavigation();

  return (
    <>
      <MDCStack.Navigator initialRouteName="HomeScreen">
        <MDCStack.Screen name="Home" component={Screen.HomeScreen} options={{ title: 'Contatti' }} />
        <MDCStack.Screen name="Elements" component={Screen.ElementsScreen} options={{ title: 'UI Elements' }} />
        <MDCStack.Screen name="CreateContact" component={Screen.CreateContact} options={{ title: 'Nuovo Contatto' }} />
        <MDCStack.Screen name="Call" component={Screen.CallScreen} options={{ title: 'Fai una chiamata' }} />
      </MDCStack.Navigator>
      <NavBar navigation={navigation} />
    </>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MDC.localization.withTranslation()(NavigationScreen);
