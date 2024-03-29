import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';
import { MDCIcon } from 'mdcx-components';

const Card = ({ uid, name, surname, avatar, telephone_number, owner_uid }) => {
  return (
    <View style={style.card}>
      {avatar !== '' ? <Image style={style.image} source={{ uri: avatar }} /> : <Image style={style.image} source={{ uri: 'https://www.confcommerciomolise.it/wp-content/uploads/2018/02/user-icon.png' }} />}

      <View
        style={{
          marginLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '70%',
        }}
      >
        <View>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
            }}
          >
            {name} {surname}
          </Text>
          <Text
            style={{
              color: '#999',
              fontSize: 12,
            }}
          >
            {telephone_number}
          </Text>
        </View>

        {owner_uid === '' ? <MDCIcon icon={'user-tie'} color={'#3479dd'}></MDCIcon> : <MDCIcon icon={'user'} color={'#999'}></MDCIcon>}
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}
      ></View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    resizeMode: 'cover',
    height: 50,
    width: 50,
    borderRadius: 100 / 1,
  },
});

export default MDC.localization.withTranslation()(Card);
