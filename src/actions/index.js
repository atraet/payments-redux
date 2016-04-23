import * as actionTypes from './types';
import axios from 'axios';

export function fetchPayments() {

    let request = axios.get('http://localhost:5050/payments');

    return {
        type: actionTypes.FETCH_PAYMENTS,
        payload: request
    }
}

export function selectPayment(payment) {
    return {
        type: actionTypes.SELECT_PAYMENT,
        payload: payment
    };
}