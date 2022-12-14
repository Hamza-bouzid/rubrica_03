import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import Card from '../components/Card';

const InputsScreen = (props) => {
  return (
    <View style={style.main}>
      <View>
        <Text style={style.label}>Input Numeri</Text>
        <TextInput style={style.textInput} keyboardType="numeric" placeholder="Inserire Numero" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Password</Text>
        <TextInput secureTextEntry={true} style={style.textInput} placeholder="Inserire la password" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Testo</Text>
        <TextInput style={style.textInput} placeholder="Inserire il testo" placeholderTextColor="#999" />
      </View>
      <View>
        <Text style={style.label}>Cerca</Text>
        <View style={[style.textInput, style.viewFlex]}>
          <TextInput
            style={{
              padding: 0,             
              width: '90%'
            }}
            placeholder="Cerca"
            placeholderTextColor="#999"
          />

          <MDCIcon
          icon={'search'}
          color={'#999'}>

          </MDCIcon>
        </View>
      </View>

      <View>
        <Card name={'Valentino'} surname={'Rossi'} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#222',
  },
  textInput: {
    backgroundColor: '#dee0e7',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  viewFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default MDC.localization.withTranslation()(InputsScreen);
