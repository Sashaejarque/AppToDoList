import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, CheckBox, Pressable, Image } from 'react-native';
import {SwitchButton} from '../SwitchButton/SwitchButton';

export const CardItem = ({ item, onpress}) => {
  return (
    <View style={styles.containerCardItem}>
      <Text style={styles.text}>{item.value}</Text>
      <View style={styles.containerButtons}>
        <SwitchButton />
        <Pressable onPress={onpress} style={{paddingLeft: 5}}>
          <Image source={require('./trash-2.png')} style={{ width: 30, height: 30 }} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCardItem: {
    width: '100%',
    height: 70,
    backgroundColor: '#F79E89',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
    flexDirection: 'row',
  },
  containerButtons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 8,
    height: '100%',
    width: 90,
    padding: 5,
    marginRight: 10
  },
  text: {
    paddingLeft: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
});
