import React from 'react';
import { View, TextInput } from 'react-native';

export const Input = ({ placeholder, value, onchange, containerStyle, inputStyle, security }) => {
  return (
    <View style={containerStyle}>
      <TextInput 
        placeholder={placeholder} 
        style={inputStyle} 
        value={value} 
        onChangeText={onchange} 
        secureTextEntry={security}
        />
    </View>
  );
};
