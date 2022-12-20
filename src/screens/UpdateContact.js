import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';

const UpdateContact = (props) => {
  const { navigation } = props;
  const route = useRoute();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [image, setImage] = useState('https://www.confcommerciomolise.it/wp-content/uploads/2018/02/user-icon.png');
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    email: '',
    birthday: '',
    telephone_number: '',
    avatar: '',
  });


  const goalCall = async (body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/contact/crud/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth, //'HS256 XXX'
      },
      body: JSON.stringify(body),
    });

    console.log(body);
    return;
  };

  const saveData = () => {
    goalCall(contact);
    navigation.navigate('Home');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    setContact((prevState) => {
      return { ...prevState, birthday: date.toLocaleDateString(), avatar: image };
    });
    hideDatePicker();
  };

  const randomImage = () => {
    const gender = ['male', 'female'];
    const randomNumber = Math.floor(Math.random() * 70);
    const randomGender = Math.floor(Math.random() * 2);

    setImage(`https://xsgames.co/randomusers/assets/avatars/${gender[randomGender]}/${randomNumber}.jpg`);

    console.log(image);
  };

  return (
    <ScrollView style={style.main}>
      <View
        style={{
          marginBottom: 25,
        }}
      >
        <Image
          style={{
            resizeMode: 'cover',
            height: 150,
            width: 150,
            borderRadius: 100 / 1,
            marginBottom: 1,
            marginTop: 10,
            alignSelf: 'center',
          }}
          source={{
            uri: avatar,
          }}
        />

        <TouchableOpacity style={style.button} onPress={() => randomImage()}>
          <Text>Cambia immagine</Text>
        </TouchableOpacity>
      </View>

      <View style={[style.textInput, style.icon]}>
        <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          placeholder="Nome"
          placeholderTextColor="#999"
          value={route.params.name}
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, name: text };
            })
          }
        />
      </View>
      <View style={[style.textInput, style.icon]}>
        <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          value={route.params.surname}
          placeholder="Cognome"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, surname: text };
            })
          }
        />
      </View>
      <View style={[style.textInput, style.icon]}>
        <MDCIcon icon={'phone'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          keyboardType="phone-pad"
          placeholder="Numero"
          value={route.params.telephone_number}
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, telephone_number: text };
            })
          }
        />
      </View>

      <View style={[style.textInput, style.icon]}>
        <MDCIcon icon={'envelope'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          keyboardType="email-address"
          placeholder="Email"
          value={route.params.email}
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, email: text };
            })
          }
        />
      </View>

      <TouchableOpacity onPress={showDatePicker}>
        <View style={[style.textInput, style.icon]}>
          <MDCIcon icon={'calendar-days'} color={'#ccc'}></MDCIcon>
          <TextInput style={style.textView} editable={false} value={route.params.birthday} placeholder="Compleanno" placeholderTextColor="#999" title="Show Date Picker" />
          <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
        </View>
      </TouchableOpacity>

      <View style={[style.textInput, style.icon]}>
        <MDCIcon icon={'location-dot'} color={'#ccc'}></MDCIcon>
        <TextInput style={style.textView} placeholder="Indirizzo" value={route.params.address} placeholderTextColor="#999" />
      </View>
      <TouchableOpacity style={style.button} onPress={() => saveData()}>
        <Text style={{ fontWeight: 'bold' }}>Aggiungi contatto</Text>
      </TouchableOpacity>
    </ScrollView>
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
  textView: {
    padding: 0,
    width: '93%',
  },
  viewFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default MDC.localization.withTranslation()(UpdateContact);
