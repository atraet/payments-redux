import {combineReducers} from 'redux';

import * as actions from '../actions/types';

import paymentsReducer from './payments';
import selectedPaymentReducer from './selectedPayment';
import invoicesReducer from './invoices';

const rootReducer = combineReducers({
    payments: paymentsReducer,
    selectedPayment: selectedPaymentReducer,
    periods: periodsReducer,
    selectedPeriod: selectedPeriodReducer,
    invoices: invoicesReducer
});

export default rootReducer;


function periodsReducer(state = [], action) {
    switch (action.type) {
        case actions.FETCH_PERIODS:
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}

function selectedPeriodReducer(state = null, action) {
    switch (action.type) {
        case actions.SELECT_PERIOD:
            return action.payload;
        default:
            return state;
    }
}
