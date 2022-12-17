import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';

const NavBar = (props) => {
  const { navigation } = props;
  return (
    <View style={style.navbar}>
      <View style={style.iconBox}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateContact')}>
          <MDCIcon width={30} height={30} icon={'star'} color={'#999'}></MDCIcon>
          <Text style={style.iconText}>Preferiti</Text>
        </TouchableOpacity>
      </View>
      <View style={style.iconBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MDCIcon width={30} height={30} icon={'user'} color={'#999'}></MDCIcon>
          <Text style={style.iconText}>Contatti</Text>
        </TouchableOpacity>
      </View>
      <View style={style.iconBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Call')}>
          <MDCIcon width={30} height={30} icon={'th'} color={'#999'}></MDCIcon>
          <Text style={style.iconText}>Tastierino</Text>
        </TouchableOpacity>
      </View>
      <View style={style.iconBox} onPress={() => navigation.navigate('Home')}>
        <MDCIcon width={30} height={30} icon={'user-friends'} color={'#999'}></MDCIcon>
        <Text style={style.iconText}>Categorie</Text>
      </View>
    </View>
  );
};



const style = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#e3e3e8',
    width: '100%',
    heigth: 10,
    paddingTop: 10,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  iconBox: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
  },
  iconText: {
    fontSize: 10,
    color: '#999',
    paddingTop: 5,
  },
});

export default MDC.localization.withTranslation()(NavBar);
