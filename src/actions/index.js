import * as actions from './types';
import * as dataService from '../dataService';

export function fetchPayments() {
    return dispatch => {

        dispatch(requestPayment());

        return dataService.fetchPayments()
            .then(response => response.data, 1000)
            .then(payments => {
                setTimeout(() => dispatch(receivePayments(payments)), 2000);
                // dispatch(receivePayments(payments))
            });
    };

    function requestPayment() {
        return {
            type: actions.REQUEST_PAYMENTS
        }
    }

    function receivePayments(payments) {
        return {
            type: actions.RECEIVE_PAYMENTS,
            payments
        }
    }

    function receivePaymentsError(error) {
        return {
            type: actions.RECEIVE_PAYMENTS_ERROR,
            error
        }
    }
}

export function selectPayment(paymentId) {
    return {
        type: actions.SELECT_PAYMENT,
        payload: paymentId
    };
}

export function fetchPeriods() {
    return {
        type: actions.FETCH_PERIODS,
        periods: dataService.fetchPeriods()
    }
}

export function selectPeriod(periodType) {
    return {
        type: actions.SELECT_PERIOD,
        payload: periodType
    }
}

export function fetchInvoices(paymentId, periodType) {
    return dispatch => {

        dispatch(requestInvoices());

        return dataService.fetchInvoices(paymentId, periodType)
            .then(response => response.data)
            .then(invoices => {
                setTimeout(() => dispatch(receiveInvoices(invoices)), 2000);
                // dispatch(receiveInvoices(invoices));
            })
    };

    function requestInvoices() {
        return {
            type: actions.REQUEST_INVOICES
        };
    }

    function receiveInvoices(invoices) {
        return {
            type: actions.RECEIVE_INVOICES,
            invoices
        };
    }

    function receiveInvoiceError(error) {
        return {
            type: actions.RECEIVE_INVOICES_ERROR,
            error
        };
    }
}

