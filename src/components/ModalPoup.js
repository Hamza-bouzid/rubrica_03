import React from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { useState, useEffect } from 'react';

import * as MDC from 'mdcx-framework';
import { MDCImage } from 'mdcx-components';

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={style.modalBackground}>
        <View style={[style.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});

export default MDC.localization.withTranslation()(ModalPoup);
