import { ADD_TASK, DELETE_ITEM, LOAD_DATA } from '../actions/todo.action';

const initialState = {
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case DELETE_ITEM:
      const id = action.payload;
      return {
        ...state,
        todo: [...state.todo.filter((item) => item.id !== id)],
      };
    case LOAD_DATA:
      return {
        ...state,
        tasks: action.tasks.map((item) => {
          item.id.toString();
          item.title;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
