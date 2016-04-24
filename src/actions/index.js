import * as actionTypes from './types';
import axios from 'axios';

export function fetchPayments() {
    let request = request = axios.get('http://localhost:5050/payments');

    return {
        type: actionTypes.FETCH_PAYMENTS,
        payload: request
    }
}

export function turnOnPaymentLoader() {
    return {
        type: actionTypes.SWITCH_PAYMENTS_LOADER,
        payload: true
    }
}

export function turnOffPaymentLoader() {
    return {
        type: actionTypes.SWITCH_PAYMENTS_LOADER,
        payload: false
    }
}

export function selectPayment(paymentId) {
    return {
        type: actionTypes.SELECT_PAYMENT,
        payload: paymentId
    };
}

export function fetchPeriods() {
    let request = axios.get('http://localhost:5050/periods');

    return {
        type: actionTypes.FETCH_PERIODS,
        payload: request
    }
}

export function selectPeriod(periodType) {
    return {
        type: actionTypes.SELECT_PERIOD,
        payload: periodType
    }
}

export function fetchInvoices(paymentId, periodType) {
    let request = axios.get('http://localhost:5050/invoices');

    return {
        type: actionTypes.FETCH_INVOICES,
        payload: request
    }
}