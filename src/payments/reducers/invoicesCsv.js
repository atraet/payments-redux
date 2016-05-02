import {REQUEST_INVOICES_CSV, RECEIVE_INVOICES_CSV, RECEIVE_INVOICES_CSV_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    csv: null
}, action) {
    switch (action.type) {
        case REQUEST_INVOICES_CSV:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_INVOICES_CSV:
            return Object.assign({}, state, {
                isFetching: false,
                csv: action.csv
            });
        case RECEIVE_INVOICES_CSV_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        default:
            return state;
    }
}