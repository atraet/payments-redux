import {combineReducers} from 'redux';

import paymentsReducer from './payments';
import selectedPaymentReducer from './selectedPayment';
import periodsReducer from './periods';
import selectedPeriodReducer from './selectedPeriod';
import invoicesReducer from './invoices';
import invoicesCsvReducer from './invoicesCsv';

const rootReducer = combineReducers({
    payments: paymentsReducer,
    selectedPayment: selectedPaymentReducer,
    periods: periodsReducer,
    selectedPeriod: selectedPeriodReducer,
    invoices: invoicesReducer,
    invoicesCsv: invoicesCsvReducer
});

export default rootReducer;