
import { View, StyleSheet, Text, ScrollView, Image,TextInput, TouchableOpacity } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import { useRoute } from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';


const SingleContactScreen = (props) => {
  const { navigation } = props;
  const route = useRoute();
  const [visible, setIsVisible]= useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [image, setImage] = useState(route.params.avatar);
  const [contact, setContact] = useState({
    uid:route.params.uid,
    name: route.params.name,
    surname: route.params.surname,
    email:route.params.email,
    birthday: route.params.birthday,
    telephone_number: route.params.telephone_number,
    avatar: route.params.avatar,
  });

  const [contactUid,setContactUid]=useState({
    uid:route.params.uid
  })


  const saveData = () => {
    goalCall("contact/crud/update", contact);
    console.log(contact);
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

    
  };

  //https://services.g-oal.com/academy_03.dev/v1/contact/crud/delete

  const goalCall = async (url, body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    console.log(MDC.util);

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/' + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',   
        Authorization: auth, //'HS256 XXX'
      },
      body: JSON.stringify(body),
    });

    setContact(await response.json());

    return contact;
  };


  const deleteContact = () => {
    goalCall('contact/crud/delete', contactUid);
    navigation.navigate('Home');
  };

  const show=()=>{
    if(visible){
      setIsVisible(false)
    }else{
      setIsVisible(true)
    }
  };

  const cancel = () => {
    setIsVisible(false)
  };

  return (
    <ScrollView style={style.main}>
      <View
        style={{
          marginBottom: 25,
        }}
      >
        {route.params.avatar ? (
          <Image
            style={style.image}
            source={{
              uri: image,
            }}
          />
        ) : (
          <Image style={style.image} source={{ uri: 'https://www.confcommerciomolise.it/wp-content/uploads/2018/02/user-icon.png' }} />
        )}
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            color: '#222',
            marginBottom: 5,
            fontWeight: '500',
            alignSelf:"center"
          }}
        >
          {route.params.name} {route.params.surname}
        </Text>
      </View>
      <View style={style.icons}>
        <View style={[style.icon, style.callIcon]}>
          <TouchableOpacity activeOpacity={0.7}>
            <MDCIcon icon={'phone'} width={25} height={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={[style.icon, style.editIcon]}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => show()}>
            <MDCIcon icon={'edit'} width={25} height={25} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={[style.icon, style.deleteIcon]}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => deleteContact()}>
            <MDCIcon icon={'trash'} width={25} height={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 4,
        }}
      >
        <View style={style.details}>
          <Text>Cellulare : </Text>
          <Text style={style.detailsValue}>{route.params.telephone_number}</Text>
        </View>
        <View style={style.details}>
          <Text>Email : </Text>
          <Text style={style.detailsValue}>{route.params.email}</Text>
        </View>
        {route.params.birthday ? (
          <View style={style.details}>
            <Text>Compleanno: </Text>
            <Text style={style.detailsValue}>{route.params.birthday}</Text>
          </View>
        ) : (
          <></>
        )}

        {route.params.address ? (
          <View style={style.details}>
            <Text>Indirizzo : </Text>
            <Text style={style.detailsValue}>{route.params.address}</Text>
          </View>
        ) : (
          <></>
        )}
      </View>

      {visible ? (
      <View style={style.mainUpdate}>
      <View
        style={{
          marginBottom: 25,
        }}
      >

        <TouchableOpacity style={style.button} onPress={() => randomImage()}>
          <Text>Cambia immagine</Text>
        </TouchableOpacity>
      </View>

      <View style={[style.textInput, style.iconForm]}>
        <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          placeholder="Nome"
          placeholderTextColor="#999"
          value={contact.name}
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, name: text };
            })
          }
        />
      </View>
      <View style={[style.textInput, style.iconForm]}>
        <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          value={contact.surname}
          placeholder="Cognome"
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, surname: text };
            })
          }
        />
      </View>
      <View style={[style.textInput, style.iconForm]}>
        <MDCIcon icon={'phone'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          keyboardType="phone-pad"
          placeholder="Numero"
          value={contact.telephone_number}
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, telephone_number: text };
            })
          }
        />
      </View>

      <View style={[style.textInput, style.iconForm]}>
        <MDCIcon icon={'envelope'} color={'#ccc'}></MDCIcon>
        <TextInput
          style={style.textView}
          keyboardType="email-address"
          placeholder="Email"
          value={contact.email}
          placeholderTextColor="#999"
          onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, email: text };
            })
          }
        />
      </View>

      <TouchableOpacity onPress={showDatePicker}>
        <View style={[style.textInput, style.iconForm]}>
          <MDCIcon icon={'calendar-days'} color={'#ccc'}></MDCIcon>
          <TextInput style={style.textView} editable={false} value={contact.birthday} placeholder="Compleanno" placeholderTextColor="#999" title="Show Date Picker" />
          <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
        </View>
      </TouchableOpacity>

      <View style={[style.textInput, style.iconForm]}>
        <MDCIcon icon={'location-dot'} color={'#ccc'}></MDCIcon>
        <TextInput style={style.textView} placeholder="Indirizzo" value={contact.address} placeholderTextColor="#999" onChangeText={(text) =>
            setContact((prevState) => {
              return { ...prevState, address: text };
            })
          } />
      </View>
      <TouchableOpacity style={style.button} onPress={() => saveData()}>
        <Text style={{ fontWeight: 'bold' }}>Salva</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={() => cancel()}>
        <Text style={{ fontWeight: 'bold' }}>Annulla</Text>
      </TouchableOpacity>
    </View>
     ) : (
      <></>
    )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
  
  },

  details: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  detailsValue: {
    color: '#222',
    fontWeight: '500',
    fontSize: 15,
  },
  image: {
    resizeMode: 'cover',
    height: 150,
    width: 150,
    borderRadius: 100 / 1,
    marginTop: 10,
    marginBottom: -15,
    alignSelf: 'center',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'space-around',
    alignSelf:"center"
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100 / 1,
    width: 50,
    height: 50,
    padding: 15,
    margin: 10,
   
  },
  callIcon: {
    backgroundColor: '#2ed058',
  },
  deleteIcon: {
    backgroundColor: '#ec534d',
  },
  editIcon: {
    backgroundColor: '#3479dd',
  },
  mainUpdate: {
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
  iconForm: {
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

export default MDC.localization.withTranslation()(SingleContactScreen);
