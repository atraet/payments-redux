import axios from 'axios';

const baseUrl = 'http://localhost:5050';

export function fetchPayments() {
    return axios.get(`${baseUrl}/payments`);
}

export function fetchPeriods() {
    return axios.get(`${baseUrl}/periods`);
}

export function fetchInvoices(paymentId, periodType) {
    console.log(paymentId);
    console.log(periodType);
    
    if (paymentId && periodType) {
        return axios.get(`${baseUrl}/invoices`);
    }

    return [];
}