import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View styles={styles.textContainer}>
      <Text style={styles.textPrincipal}>TO DO LIST</Text>
      </View>
      <View styles={styles.imgContainer}>
        <Image source={require('./settings.png')} style={{ width: 24, height: 24 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
   
    marginTop: 60,
    marginBottom: 30
  },
  textPrincipal: {
    color: '#F79E89',
    fontSize: 25,
    fontFamily: 'BebasNeue',
  },
});
