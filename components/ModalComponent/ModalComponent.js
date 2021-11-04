import React from 'react';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';

export const ModalComponent = ({ visible, onpressConfirmar, onpressCancelar }) => {
  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.containerModal}>
        <View style={styles.contentModal}>
          <Pressable onPress={onpressConfirmar} style={styles.confirmar}>
            <Text style={{ color: 'red', fontSize: 20 }}>Confirmar</Text>
          </Pressable>
          <Pressable onPress={onpressCancelar} style={styles.cancelar}>
            <Text style={{ color: 'green', fontSize: 20 }}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  containerModal: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5 
  },
  contentModal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmar: {
    backgroundColor: '#F2F2F2',
    width: '90%',
    height: 48,
    color: 'red',
    borderRadius: 8,
    padding: 5,
    margin: 10,
    marginBottom: -5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelar: {
    fontSize: 14,
    backgroundColor: '#F2F2F2',
    width: '90%',
    height: 48,
    borderRadius: 8,
    padding: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
