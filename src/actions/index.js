import * as actionTypes from './types';
import * as dataService from '../dataSerivice';

export function fetchPayments() {
    return {
        type: actionTypes.FETCH_PAYMENTS,
        payload: dataService.fetchPayments()
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
    return {
        type: actionTypes.FETCH_PERIODS,
        payload: dataService.fetchPeriods()
    }
}

export function selectPeriod(periodType) {
    return {
        type: actionTypes.SELECT_PERIOD,
        payload: periodType
    }
}

export function fetchInvoices(paymentId, periodType) {
    return {
        type: actionTypes.FETCH_INVOICES,
        payload: dataService.fetchInvoices(paymentId, periodType)
    }
}