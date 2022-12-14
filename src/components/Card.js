import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';

const Card = ({name, surname, avatar, telephone_number}) => {

    return (
        <View style={style.card}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 50,
              width: 50,
              borderRadius: 100 / 2,
            }}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Valentino_Rossi_2010_Qatar.jpg' }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '80%',
            }}
          >
            <Text style={{
              color: '#222',
              fontSize: 20
            }}>{name} {surname}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}
          >
            <Text
              style={{
                backgroundColor: '#5939af',
                color: '#fff',
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              Amici
            </Text>
          </View>
        </View>
    )

}

const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
      },
})

export default MDC.localization.withTranslation()(Card);
