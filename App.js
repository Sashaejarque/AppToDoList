import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import { HomeScreen } from './screens/HomeScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

export default function App() {
  
  //Manejo de fuentes
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    BebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf')
  })
  if(!loaded) {
    <AppLoading />
  }

  //Manejo cambio de pantallas al apretar en el boton SignIn
  const [screen, setScreen] = useState(false);
  const handleScreen = () => {
   if(emailInput.length !== 0 && passwordInput.length !== 0) {
     setScreen(true);
   } else {
    setInputError('Todos los campos son obligatorios');
   }
  }
     //UseState para controlar formulario
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleEmailForm = (t) => setEmailInput(t);
  const handlePasswordForm = (t) => setPasswordInput(t);

  //Estado para manejar input vacio
  const [inputError, setInputError] = useState('');


  return (
    <View style={styles.containerPrincipal}>
      {screen ? (<HomeScreen/>) 
        : 
          (<WelcomeScreen 
            onpress={handleScreen} 
            onchangeEmail={handleEmailForm}
            valueEmail={emailInput}
            onchangePassword={handlePasswordForm}
            valuePassword={passwordInput}
            error={inputError}
            />)
          }
    </View>
  
  );
};
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1
  }
});