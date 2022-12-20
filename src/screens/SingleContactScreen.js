import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import * as MDC from 'mdcx-framework';
import { MDCIcon } from 'mdcx-components';
import { useRoute } from '@react-navigation/native';
import ModalPoup from '../components/ModalPoup';

const SingleContactScreen = (props) => {
  const { navigation } = props;
  const route = useRoute();
  const [visiblePoup, setVisiblePoup] = useState(false);

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
      body: JSON.stringify({
        uid: body,
      }),
    });

    setContacts(await response.json());

    return contacts;
  };

  const deleteContact = () => {
    setVisiblePoup(false);
    goalCall('contact/crud/delete', route.params.uid);
    navigation.navigate('Home');
  };

  return (
    <View style={style.main}>
      <View
        style={{
          marginBottom: 25,
        }}
      >
        {route.params.avatar ? (
          <Image
            style={style.image}
            source={{
              uri: route.params.avatar,
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
          <TouchableOpacity activeOpacity={0.7}>
            <MDCIcon icon={'edit'} width={25} height={25} color={'white'} />
          </TouchableOpacity>
        </View>
        {route.params.owner_uid === '' ? (
          <View style={[style.icon, style.deleteIconDisabled]}>
            <TouchableOpacity activeOpacity={0.7}>
              <MDCIcon icon={'trash'} width={25} height={25} color={'white'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[style.icon, style.deleteIcon]}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setVisiblePoup(true)}>
              <MDCIcon icon={'trash'} width={25} height={25} color={'white'} />
            </TouchableOpacity>
          </View>
        )}
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
            <Text>Data di nascita : </Text>
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
      <ModalPoup visible={visiblePoup}>
        <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={style.modalText}>
              Vuoi eliminare il contatto: {route.params.name} {route.params.surname}?
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              width: '100%',
              justifyContent: 'space-around',
            }}
          >
            <TouchableOpacity onPress={() => setVisiblePoup(false)}>
              <View style={[style.icon, style.deleteIcon]}>
                <MDCIcon icon={'xmark'} width={25} height={25} color={'white'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteContact()}>
              <View style={[style.icon, style.checkIcon]}>
                <MDCIcon icon={'check'} width={25} height={25} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPoup>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
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
  deleteIconDisabled: {
    backgroundColor: '#d98886',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
  },
  checkIcon: {
    backgroundColor: '#2ed058',
  },
});

export default MDC.localization.withTranslation()(SingleContactScreen);
