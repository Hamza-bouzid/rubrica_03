import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';
import ModalPoup from '../components/ModalPoup';

const CreateContact = (props) => {
  const { navigation } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [image, setImage] = useState('https://www.confcommerciomolise.it/wp-content/uploads/2018/02/user-icon.png');
  const [visiblePoup, setVisiblePoup] = useState(false);
  const [visiblePoupNegative, setVisiblePoupNegative] = useState(false);
  const [userContact, setUserContact] = useState(true);
  const [contact, setContact] = useState({
    name: '',
    surname: '',
    email: '',
    birthday: '',
    telephone_number: '',
    avatar: '',
    address: '',
  });

  const goalCall = async (url, body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/' + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth, //'HS256 XXX'
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      setVisiblePoup(true);
      setTimeout(() => {
        navigation.navigate('Home');
        return;
      }, 2000);
    } else {
      setVisiblePoupNegative(true);
      setTimeout(() => {
        setVisiblePoupNegative(false);
      }, 2000);
    }
  };

  const saveData = () => {
    if (userContact) {
      goalCall('contact/crud/insert', contact);
    } else {
      goalCall('contact/company/insert_company', contact);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setContact((prevState) => {
      return {
        ...prevState,
        birthday: date
          .toISOString()
          .substring(0, 10)
          .match(/([^T]+)/)[0]
          .split('-')
          .reverse()
          .join('/'),
      };
    });
    hideDatePicker();
  };

  const randomImage = () => {
    const gender = ['male', 'female'];
    const randomNumber = Math.floor(Math.random() * 70);
    const randomGender = Math.floor(Math.random() * 2);

    setImage(`https://xsgames.co/randomusers/assets/avatars/${gender[randomGender]}/${randomNumber}.jpg`);
  };

  return (
    <View style={style.main}>
      {/*POP UP */}
      <ModalPoup visible={visiblePoup}>
        <View style={{ alignItems: 'center' }}>
          <View style={style.checkIcon}>
            <MDCIcon icon={'check'} width={80} height={80} color={'white'} />
          </View>
          <View>
            <Text style={style.modalText}>Il contatto è stato aggiunto con successo</Text>
          </View>
        </View>
      </ModalPoup>
      <ModalPoup visible={visiblePoupNegative}>
        <View style={{ alignItems: 'center' }}>
          <View style={style.XmarkIcon}>
            <MDCIcon icon={'xmark'} width={80} height={80} color={'white'} />
          </View>
          <View>
            <Text style={style.modalText}>Il contatto non è stato aggiunto</Text>
          </View>
        </View>
      </ModalPoup>
      {/*FINE POP UP */}

      <ScrollView>
        {userContact ? (
          <View style={style.radioButtons}>
            <TouchableOpacity disabled>
              <View style={[style.radioButton, style.radioButtonActive]}>
                <Text style={style.radioButtonTextActive}>Personale</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setUserContact(false)}>
              <View style={style.radioButton}>
                <Text style={style.radioButtonText}>Aziendale</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={style.radioButtons}>
            <TouchableOpacity onPress={() => setUserContact(true)}>
              <View style={style.radioButton}>
                <Text style={style.radioButtonText}>Personali</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity disabled>
              <View style={[style.radioButton, style.radioButtonActive]}>
                <Text style={style.radioButtonTextActive}>Aziendali</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            marginBottom: 25,
          }}
        >
          <Image
            style={style.image}
            source={{
              uri: image,
            }}
          />

          <TouchableOpacity style={style.button} onPress={() => randomImage()}>
            <Text>Aggiungi immagine</Text>
          </TouchableOpacity>
        </View>

        <View style={[style.textInput, style.icon]}>
          <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
          <TextInput
            style={style.textView}
            placeholder="Nome"
            placeholderTextColor="#999"
            onChangeText={(text) =>
              setContact((prevState) => {
                return { ...prevState, name: text, avatar: image };
              })
            }
          />
        </View>
        <View style={[style.textInput, style.icon]}>
          <MDCIcon icon={'user'} color={'#ccc'}></MDCIcon>
          <TextInput
            style={style.textView}
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
            placeholderTextColor="#999"
            onChangeText={(text) =>
              setContact((prevState) => {
                return { ...prevState, telephone_number: text, avatar: image };
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
            <TextInput
              style={style.textView}
              editable={false}
              value={contact.birthday}
              placeholder="Compleanno"
              placeholderTextColor="#999"
              onChangeText={(text) =>
                setContact((prevState) => {
                  return { ...prevState, address: text };
                })
              }
              title="Show Date Picker"
            />
            <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
          </View>
        </TouchableOpacity>

        <View style={[style.textInput, style.icon]}>
          <MDCIcon icon={'location-dot'} color={'#ccc'}></MDCIcon>
          <TextInput style={style.textView} placeholder="Indirizzo" placeholderTextColor="#999" />
        </View>
        <TouchableOpacity style={style.button} onPress={() => saveData()}>
          <Text style={{ fontWeight: 'bold' }}>Aggiungi contatto</Text>
        </TouchableOpacity>
        {/* White Space */}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
  },
  image: {
    resizeMode: 'cover',
    height: 150,
    width: 150,
    borderRadius: 100 / 1,
    marginBottom: 1,
    marginTop: 10,
    alignSelf: 'center',
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
  whiteSpace: {
    flex: 1,
    width: '100%',
    height: 100,
    backgroundColor: 'pink',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
  },
  checkIcon: {
    backgroundColor: '#2ed058',
    padding: 15,
    borderRadius: 100 / 1,
    marginVertical: 20,
  },

  XmarkIcon: {
    backgroundColor: '#ec534d',
    padding: 15,
    borderRadius: 100 / 1,
    marginVertical: 20,
    width: 100,
    height: 100,
  },

  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  radioButton: {
    backgroundColor: '#ccc',
    padding: 10,
    marginHorizontal: 10,
  },

  radioButtonText: {
    color: '#555',
  },

  radioButtonActive: {
    backgroundColor: '#3479dd',
  },
  radioButtonTextActive: {
    color: '#fafafa',
  },
});

export default MDC.localization.withTranslation()(CreateContact);
