import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';

const Card = ({name, surname, avatar, telephone_number}) => {

    return (
        <View style={style.card}>
          <Image
            style={{
              resizeMode: 'cover',
              height: 50,
              width: 50,
              borderRadius: 100 / 1,
            }}
            source={{uri: avatar}}
            
          />
          <View
            style={{
              marginLeft: 20
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
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginTop: 10,
        marginBottom: 10,
      },
})

export default MDC.localization.withTranslation()(Card);
