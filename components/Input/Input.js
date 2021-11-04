import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export const Input = ({placeholder, value, onchange}) => {
  return <View style={styles.contentInput}> 
    <TextInput 
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onchange}
    />
  </View>;
};

const styles = StyleSheet.create({
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
})