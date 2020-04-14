import { combineReducers } from 'redux';

import cart from './cart/reducer';

// Combina todos os reducer em um
export default combineReducers({
  cart,
});
