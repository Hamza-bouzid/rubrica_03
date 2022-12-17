import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Display from './Display';
import { MDCIcon } from 'mdcx-components';

import * as MDC from 'mdcx-framework';

const NumericPad = (val) => {
    const [displayValue, setDisplayValue] = useState("");

    const changeDisplay = (number) => {
        setDisplayValue((preNum) => {
            let stringPreNum = preNum.toString();
            let newNum = stringPreNum + number;
            return newNum;
        });
    }
    
    const handleDisplayChanges = (val = "") => {
        setDisplayValue(val);
    }

    const deleteLastNum = (number)=> {
        setDisplayValue((num) => {
            let numToDelete = num.slice(0, -1);
            return numToDelete
        });
    }

    const numbersList = [
        { number: 1},
        { number: 2},
        { number: 3},
        { number: 4},
        { number: 5},
        { number: 6},
        { number: 7},
        { number: 8},
        { number: 9},
        { number: '*'},
        { number: 0},
        { number: '#'},

    ];

    return (

        <View>
            <Display 
                style={style.display}
                value={displayValue} 
                onPress={handleDisplayChanges}
            />

            <View style={style.keyPad}>
                <View style={style.numbersContainer}>
                    {numbersList.map(n => {
                        return ( 
                            <TouchableOpacity 
                                style={style.number} 
                                key={ n.id } 
                                onPress={() => {changeDisplay(n.number)}}
                            >
                                <Text 
                                    style={style.numberText}
                                >
                                    { n.number}
                                </Text>
                            </TouchableOpacity> 
                        )
                    })}
                </View>
            </View>

            <View style={style.actionButtons} >

                <View style={style.callIcon}>
                    <TouchableOpacity  
                        activeOpacity={0.7}>
                        
                        <MDCIcon
                                icon={'phone'}
                                width={40}
                                height={40}
                                color={'white'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={ style.deleteIcon }>
                    <TouchableOpacity  
                        activeOpacity={0.7}
                        onPress={() => {deleteLastNum(displayValue)}}
                    >
                        
                        <MDCIcon
                                icon={'backspace'}
                                width={35}
                                height={35}
                                color={'#b3b3b3'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

            
    )

}

const style = StyleSheet.create({
    
    keyPad: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 25
    },

    number: {
        
        borderColor: 'grey',
        borderRadius: 100,
        width: 65,
        height: 65,
        justifyContent: 'center',
        backgroundColor: '#c4c3c0',
        margin: 10
    },

    numberText: {
        color: 'black',
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'center',
    },

    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },

    callIcon: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 65,
        height: 65,
        padding: 15,
        backgroundColor: '#2ed058',
        margin: 10,
    },

    deleteIcon: {
        position: 'absolute',
        right:     '20%',
        width: 50,
        height: 50,
        borderRadius: 100,
        alignSelf: 'center',
        justifyContent: 'center',
    }
})

export default MDC.localization.withTranslation()(NumericPad);


