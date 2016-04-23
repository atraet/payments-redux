import { combineReducers } from 'redux';
import paymentsReducer from './payments';

const rootReducer = combineReducers({
  payments: paymentsReducer
});

export default rootReducer;
