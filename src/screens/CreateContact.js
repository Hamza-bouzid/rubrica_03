import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from "react-native";
import * as MDC from "mdcx-framework";
import moment from 'moment';
import { MDCIcon } from 'mdcx-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from "react";


const CreateContact = (props) => {
  const { navigation } = props;
  const goalCall = async () => {
    const tokens = await MDC.session.tokens();
    const auth = "bearer " + tokens.accessToken;
  
    const response = await fetch(
      "https://services.g-oal.com/academy_03.dev/v1/contact/crud/insert",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: auth, //'HS256 XXX'
        },
        body: JSON.stringify({
          "name": "Jasmine",
          "surname": "Gialli",
          "email": "giovannigialli@gmail.com",
          "birthday": "30-11-1999",
          "address": "via rossi, 9",
          "telephone_number": "3546836452",
          "avatar": "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Jasmine.jpg/revision/latest?cb=20200316162740&path-prefix=it"
      }),
      });
  
      return ;
    };
  
    const saveData = () => {
      goalCall();
      navigation.navigate('Home');
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  
  return (
    <View style={style.main}>
      <Image
        style={{
          resizeMode: "cover",
          height: 150,
          width: 150,
          borderRadius: 100 / 1,
          marginBottom :20, 
          marginTop :10, 
          alignSelf: "center"
        }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/8/81/Valentino_Rossi_2010_Qatar.jpg",
        }}
      />

  <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          placeholder="Nome"
          placeholderTextColor="#999"
        />
      </View>
      <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          placeholder="Cognome"
          placeholderTextColor="#999"
        />
      </View>
      <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'phone'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          keyboardType="phone-pad"
          placeholder="Numero"
          placeholderTextColor="#999"
        />
      </View>

      <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'envelope'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          keyboardType="email-address" 
          placeholder="Email"
          placeholderTextColor="#999"
        />
      </View>

      <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'calendar-days'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          placeholder="Compleanno"
          placeholderTextColor="#999"
          title="Show Date Picker" onPress={showDatePicker}
        />
       < DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>

      <View style={[style.textInput, style.icon]}>
      <MDCIcon icon={'location-dot'} color={'#ccc'}></MDCIcon>
        <TextInput
        style={style.textView}
          placeholder="Indirizzo"
          placeholderTextColor="#999"
        />
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={() => saveData()}
      >
        <Text style={{fontWeight: 'bold'}}>Aggiungi contatto</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },

  textInput: {
    backgroundColor: '#e3e3e8',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
   
  },
  textView:{
    padding: 0,
    width: '93%'
  },
  viewFlex: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    marginTop: 10,
    alignSelf: "center",

  }
});




export default MDC.localization.withTranslation()(CreateContact);
