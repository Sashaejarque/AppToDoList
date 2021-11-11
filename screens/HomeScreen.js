import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { Add } from '../components/Add/Add';
import { CardItem } from '../components/CardItem/CardItem';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';

export const HomeScreen = () => {
  //Estado para controlar items y sumarlos a la lista
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  //Estado para manejar modal
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  //Estado para manejar input vacio
  const [inputError, setInputError] = useState('');

  //Estado para manejar checkBox

  //Funcion eliminar elemento de la lista
  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };
  //Funcion para manejar modal
  const handleModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };

  //Funcion cerrar modal
  const closeModal = () => {
    setModalVisible(false);
  };

  //Funcion para almacenar datos en el state
  const handleItem = (t) => {
    setTextItem(t);
    console.log(t)
  }

  //Funcion para anadir elementos a la lista
  const addItem = () => {
    if (textItem.length !== 0) {
      setItemList((currentItems) => [...currentItems, { id: Math.random().toString(), value: textItem }]);
      setTextItem('');
      setInputError('');
    } else {
      setInputError('Este campo es obligatorio');
    }
  };
 
  return (
    <View style={styles.container}>
      <Header />
      <Title />
      <Add referencia={'Agregar item'} valor={textItem} onchange={handleItem} touch={addItem} />
      <View style={styles.contentFlatlist}>
        <Text style={styles.inputError}>{inputError}</Text>
     <FlatList
          data={itemList}
          renderItem={(data) => {
            return (
              <View style={styles.contCard}>
                <CardItem item={data.item} onpress={() => handleModal(data.item.id)} />
              </View>
            );
          }}
          keyExtractor={(data) => data.id}
          style={styles.flatList}
        />  
        
      </View>
      <ModalComponent visible={modalVisible} onpressConfirmar={handleConfirmDelete} onpressCancelar={closeModal} />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contCard: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  contentFlatlist: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    width: '90%',
    marginTop: 10,
  },
  inputError: {
    color: 'red',
    marginTop: 10,
  },
  emptyContainer: {
    fontSize: 50
  }
});
