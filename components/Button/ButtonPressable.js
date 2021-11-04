import React from 'react';
import { StyleSheet, Image, View, Pressable, Text } from 'react-native';

export const ButtonPressable = ({ onpress }) => {
  return (
    <View>
      <Pressable onPress={onpress}>
        <Image source={require('./plus-circle.png')} style={{ width: 35, height: 35 }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
  },
});
