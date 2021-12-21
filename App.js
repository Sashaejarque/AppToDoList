import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { HomeScreen } from './screens/HomeScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import store from './store';
import { Provider } from 'react-redux';
import { init } from './db';

init()
  .then(() => {
    console.log('Database initialized');
  })
  .catch((err) => {
    console.log('Database failed');
    console.log(err.message);
  });

export default function App() {
  //Manejo de fuentes
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    BebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf'),
  });
  if (!loaded) {
    <AppLoading />;
  }

  //Manejo cambio de pantallas al apretar en el boton SignIn
  const [screen, setScreen] = useState(true);
  const handleScreen = () => {
    if (emailInput.length !== 0 && passwordInput.length !== 0) {
      setScreen(true);
    } else {
      setInputError('Todos los campos son obligatorios');
    }
  };
  //UseState para controlar formulario
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleEmailForm = (t) => setEmailInput(t);
  const handlePasswordForm = (t) => setPasswordInput(t);

  //Estado para manejar input vacio
  const [inputError, setInputError] = useState('');

  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <View style={styles.containerPrincipal}>
        {screen ? (
          <HomeScreen />
        ) : (
          <WelcomeScreen
            onpress={handleScreen}
            onchangeEmail={handleEmailForm}
            valueEmail={emailInput}
            onchangePassword={handlePasswordForm}
            valuePassword={passwordInput}
            error={inputError}
          />
        )}
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
  },
});
