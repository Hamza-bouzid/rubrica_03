import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity, Text } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';

import HelloWorld from '../components/HelloWorld';
import { backgroundColor } from 'mdcx-framework/dist/GUI/Navbar';
import Card from '../components/Card';
import NavBar from '../components/NavBar';

const HomeScreen = (props) => {
  const { navigation } = props;
  const [contacts, setContacts] = useState();
  const [textInput, setTextInput] = useState({
    textInput: '',
  });
  // Funzione per la chiamata Goal
  const goalCall = async (url, body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    console.log(MDC.util)

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/' + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth, //'HS256 XXX'
      },
      body: JSON.stringify(body),
    });

    setContacts(await response.json());

    return contacts;
  };

  useEffect(() => {
    goalCall('contact/get_user_contacts', textInput);
  }, [textInput, contacts]);

  const renderContact = ({ item }) => <Card name={item.name} surname={item.surname} avatar={item.avatar} />;

  return (
    <View style={style.main}>
      {/*Barra di ricerca */}
      <View
        style={{
          marginBottom: 10,
          alignItems: 'flex-end',
          paddingRight: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('CreateContact')}>
          <MDCIcon icon={'plus-circle'} width={30} height={30} color={'#999'}></MDCIcon>
        </TouchableOpacity>
      </View>

      <View style={[style.textInput, style.viewSearch]}>
        <MDCIcon icon={'search'} color={'#999'}></MDCIcon>
        <TextInput
          onChangeText={(text) => setTextInput({ textInput: text })}
          style={{
            padding: 0,
            width: '90%',
          }}
          placeholder="Cerca"
          placeholderTextColor="#999"
        />
      </View>

      <View style={style.border}></View>
      <View
        style={{
          paddingVertical: 10,
        }}
      >
        {contacts && contacts.length <= 0 ? (
          <View style={style.noResult}>
            <MDCIcon width={50} height={50} icon={'search'} color={'#999'}></MDCIcon>
            <Text style={style.noResultBigText}>Nessun risultato per "{textInput.textInput}" </Text>
            <Text style={style.noResultSmallText}>Verifica che non ci siano errori di battitura o esegui una nuova ricerca.</Text>
          </View>
        ) : (
          <FlatList data={contacts} renderItem={renderContact} keyExtractor={(item) => item.id} />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textInput: {
    backgroundColor: '#e3e3e8',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  viewSearch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },

  border: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  noResult: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  noResultBigText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10,
    color: "#555",
    textAlign: 'center'
  },
  noResultSmallText: {
    textAlign: 'center',
    color: "#999",
  }
});

export default MDC.localization.withTranslation()(HomeScreen);
