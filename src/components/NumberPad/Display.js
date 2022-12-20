import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput} from 'react-native';
import ContactRow from '../ContactRow';

import * as MDC from 'mdcx-framework';

const Display = ({value}) => {
    const [tel, setValue] = useState(value);
    const [contacts, setContacts] = useState();

    const [textInput, setTextInput] = useState({
        textInput: '',
      });


    
      
    useEffect(() => {
        setValue(value)
    }, [value]);


    return (
    <View>
        <View style={ style.display }>
                <TextInput 
                    style={style.inputText}
                    value={tel}
                    showSoftInputOnFocus={false}
                    onChangeText={(text) => setTextInput({ textInput: text })}
                />   
                        
            </View>
    </View>
        
        
    )
}

const style = StyleSheet.create({
    display: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignContent: 'flex-end',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        
    },
    inputText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black'

    }
})

export default MDC.localization.withTranslation()(Display);
