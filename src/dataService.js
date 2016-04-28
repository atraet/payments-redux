import axios from 'axios';

const baseUrl = 'http://localhost:3333';

export function fetchPayments() {
    return axios.get(`${baseUrl}/payments`);
}

export function fetchPeriods() {
    // return axios.get(`${baseUrl}/periods`);
    return [
        {
            "type": 1,
            "description": "Bestedingen april 2016"
        },
        {
            "type": 2,
            "description": "Bestedingen mei 2016"
        },
        {
            "type": 3,
            "description": "Bestedingen jan t/m mrt 2016"
        },
        {
            "type": 4,
            "description": "Bestedingen 2015"
        }
    ];
}

export function fetchInvoices(paymentId, periodType) {
    if (paymentId && periodType) {
        return axios.get(`${baseUrl}/invoices`);
    }

    return [];
}