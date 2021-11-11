import React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { Input } from '../components/Input/Input';

export const WelcomeScreen = ({ onpress, onchangeEmail, onchangePassword, valueEmail, valuePassword, error }) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/LogoLogin.png')} style={{ width: 187, height: 180 }} />
      </View>
      <View style={styles.formContainer}>
      <Text style={styles.inputError}>{error}</Text>
        <View style={styles.contentInput}>
          <Input
            placeholder={'Email'}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            onchange={onchangeEmail}
            value={valueEmail}
            security={false}
          />
          <Input
            placeholder={'Password'}
            containerStyle={styles.inputContainer}
            inputStyle={styles.input}
            onchange={onchangePassword}
            value={valuePassword}
            security={true}
          />
        </View>
        <Pressable style={styles.button} onPress={onpress}>
          <Text style={styles.textcontainer}>SIGN IN</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contentInput: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 12,
    borderColor: 'rgba(39, 39, 39, 0.5)',
    paddingLeft: 8,
  },
  button: {
    height: 48,
    width: '90%',
    backgroundColor: '#F79E89',
    borderRadius: 12,
   
    padding: 16,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcontainer: {
    fontFamily: 'Montserrat',
    color: 'white',
    textAlign: 'center',
  },
  inputError: {
    color: 'red',
    marginTop: 10,
  }
});
