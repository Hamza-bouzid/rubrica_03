import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import * as MDC from 'mdcx-framework';


const HomeScreen = (props) => {

        const { t } = props;

        return (
            <View style={style.main}>
                <Text>Vuoto</Text>
            </View>
        )


}

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MDC.localization.withTranslation()(HomeScreen);
