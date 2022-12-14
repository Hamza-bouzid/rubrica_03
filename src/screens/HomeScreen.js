import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button, Image, Text, TextInput, FlatList} from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';

import HelloWorld from '../components/HelloWorld';
import { backgroundColor } from 'mdcx-framework/dist/GUI/Navbar';
import Card from '../components/Card';

const contacts = [
  {
    id: '1',
    name: 'Marco',
    surname: 'Rossi',
  },
  {
    id: '2',
    name: 'Giovanni',
    surname: 'Rossi',
  },
  {
    id: '3',
    name: 'Anna',
    surname: 'Rossi',
  },
  {
    id: '4',
    name: 'Anna',
    surname: 'Rossi',
  },
  {
    id: '2',
    name: 'Giovanni',
    surname: 'Rossi',
  },
  {
    id: '3',
    name: 'Anna',
    surname: 'Rossi',
  },
  {
    id: '4',
    name: 'Anna',
    surname: 'Rossi',
  },
  {
    id: '2',
    name: 'Giovanni',
    surname: 'Rossi',
  },
  {
    id: '3',
    name: 'Anna',
    surname: 'Rossi',
  },
  {
    id: '4',
    name: 'Anna',
    surname: 'Rossi',
  },
];

const HomeScreen = (props) => {
  const { navigation } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [buttonText, setButtonText] = useState('Nascondi');

  const renderContact = ({ item }) => <Card name={item.name} surname={item.surname} />;

  const showView = () => {
    if (isVisible) {
      setIsVisible(false);
      setButtonText('Mostra');
    } else {
      setIsVisible(true);
      setButtonText('Nascondi');
    }
  };

  return (
    <View style={style.main}>
      {/* <Button onPress={() => showView()} title={buttonText} style={style.buttonColor}></Button>
      <View style={style.view1}>
        <Image
          style={{
            resizeMode: 'contain',
            height: 200,
            width: 200,
          }}
          source={{ uri: 'https://icones.pro/wp-content/uploads/2021/02/phone-icon-rose.png' }}
        />
      </View>

      {isVisible ? <View style={style.view2}></View> : <></>}

      <View style={style.view2}></View>

      <Button color="#2196f3" onPress={() => navigation.navigate('Inputs')} title={'Vai a Inputs'}></Button> */}

      <View style={style.main}>
        {/*Barra di ricerca */}
        <Button color="#2196f3" onPress={() => navigation.navigate('Inputs')} title={'Vai a Inputs'}></Button>
        <View style={[style.textInput, style.viewSearch]}>
          <TextInput
            style={{
              padding: 0,
              width: '90%',
            }}
            placeholder="Cerca"
            placeholderTextColor="#999"
          />

          <MDCIcon icon={'search'} color={'#999'}></MDCIcon>
        </View>
      </View>
      <View style={style.border}></View>
      <View>
        <FlatList data={contacts} renderItem={renderContact} keyExtractor={(item) => item.id} />
      </View>
      <Button color="#2196f3" onPress={() => navigation.navigate('Inputs')} title={'Vai a Inputs'}></Button>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
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
  },
});

export default MDC.localization.withTranslation()(HomeScreen);
