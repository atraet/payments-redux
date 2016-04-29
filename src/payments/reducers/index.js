import {combineReducers} from 'redux';

import paymentsReducer from './payments';
import selectedPaymentReducer from './selectedPayment';
import periodsReducer from './periods';
import selectedPeriodReducer from './selectedPeriod';
import invoicesReducer from './invoices';

const rootReducer = combineReducers({
    payments: paymentsReducer,
    selectedPayment: selectedPaymentReducer,
    periods: periodsReducer,
    selectedPeriod: selectedPeriodReducer,
    invoices: invoicesReducer
});

export default rootReducer;