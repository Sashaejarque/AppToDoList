import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Image source={require('./Union.png')} style={styles.logo} />
      <Text style={styles.title}>LIST OF TO DO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 25,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'BebasNeue',
    color: '#F76C6A',
    paddingLeft: 5,
    fontWeight: '700'
  },
  logo: {
    width: 30, 
    height: 30,
    marginTop: 4
  }
  
});
