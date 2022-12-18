import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Modal, Dimensions, TouchableOpacity } from 'react-native';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';

const BottomModal = (props) => {
  const { navigation } = props;
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <Modal animationType={'fade'} transparent={true} visible={show} onRequestClose={close}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000AA',
          justifyContent: 'flex-end',
        }}
      ></View>
    </Modal>
  );
};

const style = StyleSheet.create({
  helloworld: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    backgroundColor: 'rgba(0,0,0,.05)',
    padding: 10,
    borderRadius: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  helloworldText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MDC.localization.withTranslation()(BottomModal);
