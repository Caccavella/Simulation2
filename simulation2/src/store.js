import { createStore } from 'redux'; //Notice redux, not react-redux
import reducer from './ducks/reducer';

let store = createStore(reducer);

export default store;