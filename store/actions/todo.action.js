import { useDispatch } from 'react-redux';
import { fetchData } from '../../db';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_ITEM = 'DELETE_ITEM';
export const LOAD_DATA = 'LOAD_DATA';

export const addItem = (item) => ({
  type: ADD_TASK,
  payload: item,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  payload: item,
});

export const loadData = () => {
  return async (dispatch) => {
    try {
      const result = await fetchData();
      console.log(result);
      dispatch({ type: LOAD_DATA, tasks: result.rows._array });
    } catch (error) {
      throw error;
    }
  };
};
