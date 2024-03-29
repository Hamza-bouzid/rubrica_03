import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { MDCIcon } from 'mdcx-components';
import Display from '../components/Display';
import ContactRow from '../components/ContactRow';
import { Linking } from 'react-native';

import * as MDC from 'mdcx-framework';

const CallScreen = (props) => {
  const [displayValue, setDisplayValue] = useState('');
  const { navigation } = props;
  const [contacts, setContacts] = useState();

  const changeDisplay = (number) => {
    setDisplayValue((preNum) => {
      let stringPreNum = preNum.toString();
      let newNum = stringPreNum + number;
      return newNum;
    });
  };

  const deleteLastNum = (number) => {
    setDisplayValue((num) => {
      let numToDelete = num.slice(0, -1);
      return numToDelete;
    });
  };

  //************** */ Funzione per la chiamata Goal
  const goalCall = async (url, body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/' + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth, //'HS256 XXX'
      },
      body: JSON.stringify({
        textInput: body,
      }),
    });

    setContacts(await response.json());

    return contacts;
  };

  //******************filtro **************/
  useEffect(() => {
    goalCall('contact/get_user_contacts', displayValue);
  }, [displayValue]);

  //******************Chiamare un numero di telefono con API native del sistema operativo ********/

  const callNumber = async (number) => {
    const url = 'tel:' + number;
    const supported = await Linking.canOpenURL(url);
    if (supported)
      Linking.openURL(url).catch((error) => {
        console.log(error);
      });
  };

  const numbersList = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }, { number: 6 }, { number: 7 }, { number: 8 }, { number: 9 }, { number: '*' }, { number: 0 }, { number: '#' }];

  const renderContact = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SingleContact', {
          uid: item.uid,
          name: item.name,
          surname: item.surname,
          telephone_number: item.telephone_number,
          avatar: item.avatar,
          email: item.email,
          address: item.address,
          birthday: item.birthday,
        })
      }
    >
      <ContactRow name={item.name} surname={item.surname} avatar={item.avatar} telephone_number={item.telephone_number} navigation={navigation} />
    </TouchableOpacity>
  );

  return (
    <View style={style.main}>
      <View>
        <Display value={displayValue} />

        <View style={style.filteredList}>
          {displayValue !== '' ? (
            <View style={style.filterList}>
              <FlatList data={contacts} renderItem={renderContact} keyExtractor={(item) => item.id} />
            </View>
          ) : (
            <View style={style.filteredList}></View>
          )}
        </View>
      </View>

      <View style={style.keyPad}>
        <View style={style.numbersContainer}>
          {numbersList.map((n) => {
            return (
              <TouchableOpacity
                style={style.number}
                key={n.id}
                onPress={() => {
                  changeDisplay(n.number);
                }}
              >
                <Text style={style.numberText}>{n.number}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={style.actionButtons}>
        <View style={style.callIcon}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => callNumber(displayValue)}>
            <MDCIcon icon={'phone'} width={40} height={40} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={style.deleteIcon}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              deleteLastNum({ displayValue });
            }}
          >
            <MDCIcon icon={'backspace'} width={35} height={35} color={'#b3b3b3'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  keyPad: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  filteredList: {
    // backgroundColor: 'blue',
    height: 80,
    marginBottom: 20,
  },

  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
  },

  number: {
    borderColor: 'grey',
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#c4c3c0',
    margin:10,
  },

  numberText: {
    color: 'black',
    fontSize: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },

  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  callIcon: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 65,
    height: 65,
    padding: 15,
    backgroundColor: '#2ed058',
    margin: 1,
  },

  deleteIcon: {
    position: 'absolute',
    right: '20%',
    width: 50,
    height: 50,
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default MDC.localization.withTranslation()(CallScreen);
