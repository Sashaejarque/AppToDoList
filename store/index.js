import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todo.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
