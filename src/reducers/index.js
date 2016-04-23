import {combineReducers} from 'redux';

import paymentsReducer from './payments';
import selectedPaymentReducer from './selectedPayment';

const rootReducer = combineReducers({
    payments: paymentsReducer,
    selectedPayment: selectedPaymentReducer
});

export default rootReducer;
