// store.js
import { createStore } from 'redux';
import todoReducer from './state/reducers/reducers_index'; 

const store = createStore(todoReducer);

export default store;
