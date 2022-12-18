import React from 'react';
import { View, StyleSheet } from 'react-native';

// //importo display e numericPad
import NumericPad from '../components/NumberPad/NumericPad';


 import * as MDC from 'mdcx-framework';

 const CallScreen = () => {

     return (
         <View style={style.main}>
             <NumericPad style={style.NumericPad}/>
         </View>

   );
 };

 const style = StyleSheet.create({
     main: {
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-evenly'

     },
    
 });

export default MDC.localization.withTranslation()(CallScreen);
