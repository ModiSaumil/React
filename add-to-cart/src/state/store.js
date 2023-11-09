// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './Reducer/reducer_index';

const store = createStore(cartReducer);

export default store;
