import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { MDCIcon } from 'mdcx-components';

import * as MDC from 'mdcx-framework';

const ContactRow = ({ name, surname, avatar, telephone_number, navigation }) => {
  return (
    <View style={style.row}>
      {/* <View>
                {avatar !== '' ? 
                    <Image 
                        style={style.image} 
                        source={{ uri: avatar }} 
                    /> 
                    : 
                    <Image 
                        style={style.image} 
                        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser&https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visualpharm.com%2Ffree-icons%2Fuser-595b40b85ba036ed117da56f&psig=AOvVaw3TH7ZafTm6B0E8i-QcwHRA&ust=1671547399445000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjJ1Ln1hfwCFQAAAAAdAAAAABAJ=AOvVaw3TH7ZafTm6B0E8i-QcwHRA&ust=1671547399445000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjJ1Ln1hfwCFQAAAAAdAAAAABAE' }} 
                    />
                }
            </View> */}
        <View style={style.contactRow}>
            <View style={style.data}>
                <Text style={style.name}>
                {name} {surname}
                </Text>
                <Text style={style.phone}>
                    {telephone_number}
                </Text>
            </View>
            <View>
                <View style={style.infoIcon}>
                    <MDCIcon icon={'info'} width={25} height={25} color={'white'} />
        </View>
            </View>

        </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  row: {
    flexDirection: 'column',
    paddingLeft: 30,
    borderTopColor: '#82868A',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,

  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 50,
    alignItems: 'center',

  },
  data:{

  },
  infoIcon:{
    
    justifyContent: 'center',
    borderRadius: 100,
    width: 25,
    height: 25,
    backgroundColor: '#B2B3B5',
    margin: 1,
    
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#56585D'
  },
  phone: {
    fontSize: 14,
  },
});

export default MDC.localization.withTranslation()(ContactRow);
