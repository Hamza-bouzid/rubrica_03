import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';
import { MDCIcon } from 'mdcx-components';
import Display from '../components/NumberPad/Display';
import NumericPad from '../components/NumberPad/NumericPad';

const CallPhoneScreen = (props) => {
    const backgroundImg = { uri: "img/liquid-cheese.svg"  };
    
    const showDisplay = () => (
        <Display />
    )

    

    return (
        <View style={style.main}>
            <ImageBackground source={backgroundImg} resizeMode="cover" style={style.backgroundImage}>
                <View style={style.name}>
                    <Display 
                    /><Text>{telephone_number} </Text>
                    {/* <Text style={style.nameText}>{props.passDisplayValue}</Text> */}
                </View>
                <View style={style.time}>
                    <Text style={style.time}>04:12</Text>
                </View>
                <View style={style.buttonsContainer}>
                    <View style={style.icon}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                            >
                            
                            <MDCIcon
                                    icon={'microphone'}
                                    width={40}
                                    height={40}
                                    color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                            >
                            
                            <MDCIcon
                                    icon={'plus'}
                                    width={40}
                                    height={40}
                                    color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                            >
                            
                            <MDCIcon
                                    icon={'pause'}
                                    width={40}
                                    height={40}
                                    color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.icon}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                            >
                            
                            <MDCIcon
                                    icon={'user'}
                                    width={40}
                                    height={40}
                                    color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.closeCall}>
                    <View style={style.icon}>
                        <TouchableOpacity  
                            activeOpacity={0.7}
                        >
                            
                            <MDCIcon
                                    icon={'phone'}
                                    width={40}
                                    height={40}
                                    color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ImageBackground>          
        </View>

    );
};

    const style = StyleSheet.create({
        main: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'black'
        },
        
        backgroundImage: {
            flex: 1,
            justifyContent: "center",
            alignSelf: 'center',
            
        },
        
        name:{
            flex: 1,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
            

        },
        nameText: {
            fontSize: 30,
            color: 'white'

        },

        time:{
            flex: 1,
            alignItems: "center",
            color: 'white'
        },
        buttonsContainer:{
            flex: 3,
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: "center",
        },
        icon: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            width: 65,
            height: 65,
            padding: 15,
            backgroundColor: '#C9C4C490',
            margin: 30,
        },
        closeCall:{
            flex: 2,            
            justifyContent: "center",
            alignItems: "center",

        },

        closeCallIcon: {
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

    });

export default MDC.localization.withTranslation()(CallPhoneScreen);
