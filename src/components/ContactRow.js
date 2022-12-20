import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import * as MDC from 'mdcx-framework';

const ContactRow = ( { name, surname, avatar, telephone_number }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('SingleContact')}>
        <View style={style.row}>
            <View>
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
            </View>
            

            <View style={style.image}>      
                <Text style={style.name}>
                    {name} {surname}
                </Text>
                <Text style={style.phone}>
                    {telephone_number}
                </Text>
            </View>
      
        </View>
    </TouchableOpacity>

    
  );
};

const style = StyleSheet.create({
    row: {
        flexDirection: 'column',
        paddingLeft: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'       
    },
    phone: {
        fontSize: 14,
    }
  
});

export default MDC.localization.withTranslation()(ContactRow);
