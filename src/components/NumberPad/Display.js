import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

import * as MDC from 'mdcx-framework';

const Display = ({value = ""}) => {
    const [tel, setValue] = useState(value);
    
    useEffect(() => {
        setValue(value)
    }, [value]);

    const handleChange = (e) => {
        setValue((prevValue) => {
            let numValue = "" + e.target.value;
            
        });
    }

    return (
        <View style={ style.display }>
            <TextInput 
                style={style.inputText}
                value={tel}
                showSoftInputOnFocus={false}
                onChange={handleChange}
                multiline={true}
            />           
        </View>
    )
}


const style = StyleSheet.create({
    display: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        minHeight: 100,
        lineHeight: 100,
        

        
       
    },
    inputText: {
        textAlign: 'center',
        fontSize: 30,
    }
})

export default MDC.localization.withTranslation()(Display);
