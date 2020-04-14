import { createStore } from 'redux';

// Importa todos os reducer
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
