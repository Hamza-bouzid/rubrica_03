import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import React, { useState } from 'react';
import ModalPoup from '../components/ModalPoup';

const CreateCategory = (props) => {
  const { navigation } = props;

  const [image, setImage] = useState('https://cdn0.iconfinder.com/data/icons/news-and-magazine/512/categories-1024.png');
  const [visiblePoup, setVisiblePoup] = useState(false);
  const [visiblePoupNegative, setVisiblePoupNegative] = useState(false);
  const [userContact, setUserContact] = useState(true);
  const [contact, setContact] = useState({
    name: ''
  });

  const goalCall = async (url, body) => {
    const tokens = await MDC.session.tokens();
    const auth = 'bearer ' + tokens.accessToken;

    const response = await fetch('https://services.g-oal.com/academy_03.dev/v1/category/insert_category' + url, {
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
      goalCall('category/insert_category', contact);
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
            <Text style={style.modalText}>La categoria è stata aggiunta con successo</Text>
          </View>
        </View>
      </ModalPoup>
      <ModalPoup visible={visiblePoupNegative}>
        <View style={{ alignItems: 'center' }}>
          <View style={style.XmarkIcon}>
            <MDCIcon icon={'xmark'} width={80} height={80} color={'white'} />
          </View>
          <View>
            <Text style={style.modalText}>La categoria non è stata aggiunta</Text>
          </View>
        </View>
      </ModalPoup>
      {/*FINE POP UP */}

      <ScrollView>
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
        <TouchableOpacity style={style.button} onPress={() => saveData()}>
          <Text style={{ fontWeight: 'bold' }}>Aggiungi categoria</Text>
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
    borderRadius: 20,
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

export default MDC.localization.withTranslation()(CreateCategory);
