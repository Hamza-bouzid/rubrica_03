import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';

const HelloWorld = (props) => {

    const { navigation } = props;

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={style.helloworld}>
                <MDCImage uri="img/LOGO.svg" style={style.logo} />
                <Text style={style.helloworldText}>Hello world</Text>
            </View>
        </View>
    )

}

const style = StyleSheet.create({
    helloworld: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "rgba(0,0,0,.1)",
        backgroundColor: "rgba(0,0,0,.05)",
        padding: 10,
        borderRadius: 10
    },
    logo: {
        width: 120,
        height: 120
    },
    helloworldText: {
        fontSize: 16,
        color: '#333'
    }
})

export default MDC.localization.withTranslation()(HelloWorld);
