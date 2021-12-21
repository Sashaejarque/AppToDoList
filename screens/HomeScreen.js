import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header/Header';
import { Title } from '../components/Title/Title';
import { Add } from '../components/Add/Add';
import { CardItem } from '../components/CardItem/CardItem';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/todo.action';
import { deleteItem } from '../store/actions/todo.action';
import { addTask } from '../db/index';
import { fetchData } from '../db/index';
import * as todoAction from '../store/actions/todo.action';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.todo).todo;

  //Estado para controlar items y sumarlos a la lista
  const [textItem, setTextItem] = useState('');

  //Estado para manejar modal
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  //Estado para manejar input vacio
  const [inputError, setInputError] = useState('');

  //Funcion eliminar elemento de la lista
  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    dispatch(deleteItem(id));
    setModalVisible(false);
    setItemSelected({});
  };
  //Funcion para manejar modal
  const handleModal = (id) => {
    setItemSelected(List.find((item) => item.id === id));
    setModalVisible(true);
    console.log(itemSelected);
  };

  //Funcion cerrar modal
  const closeModal = () => {
    setModalVisible(false);
  };

  //Funcion para almacenar datos en el state
  const handleItem = (t) => {
    setTextItem(t);
  };

  //Funcion para anadir elementos a la lista
  const add = () => {
    const id = Math.random.toString();
    if (textItem.length !== 0) {
      dispatch(addItem({ id: id, value: textItem }));
      dispatch(addTask(textItem, id));
      setTextItem('');
      setInputError('');
    } else {
      setInputError('Este campo es obligatorio');
    }
  };
  useEffect(() => {
    dispatch(todoAction.loadData());
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Title />
      <Add referencia={'Agregar item'} valor={textItem} onchange={handleItem} touch={add} />
      <View style={styles.contentFlatlist}>
        <Text style={styles.inputError}>{inputError}</Text>
        <Button onPress={fetchData} title="Buenas" />
        <FlatList
          data={List}
          renderItem={(data) => {
            console.log(data);
            return (
              <View style={styles.contCard}>
                <CardItem item={data.item} onpress={() => handleModal(data.item.id)} />
              </View>
            );
          }}
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
    fontSize: 50,
  },
});
