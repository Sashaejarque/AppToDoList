import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from '../Input/Input';
import { ButtonPressable } from '../Button/ButtonPressable';

export const Add = ({ touch, referencia, valor, onchange }) => {
  return (
    <View style={styles.containerAdd}>
      <Input 
        placeholder={referencia} 
        value={valor}
        onchange={onchange}
        containerStyle={styles.contentInput}
        inputStyle={styles.input}
      />
      <ButtonPressable 
        onpress={touch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerAdd: {
    width: '100%',
    height: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    borderRadius: 40,
    paddingLeft: 20
  },
  contentInput: {
    width: '80%'
  }
});
