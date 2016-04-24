import {combineReducers} from 'redux';

import paymentsReducer from './payments';
import selectedPaymentReducer from './selectedPayment';
import isLoadingPaymentsReducer from './isLoadingPayments';
import periodsReducer from './periods';
import selectedPeriodReducer from './selectedPeriod';
import invoicesReducer from './invoices';

const rootReducer = combineReducers({
    payments: paymentsReducer,
    isLoadingPayments: isLoadingPaymentsReducer,
    selectedPayment: selectedPaymentReducer,
    periods: periodsReducer,
    selectedPeriod: selectedPeriodReducer,
    invoices: invoicesReducer
});

export default rootReducer;