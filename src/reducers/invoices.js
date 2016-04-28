import {REQUEST_INVOICES, RECEIVE_INVOICES, RECEIVE_INVOICES_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    items: [],
    error: null
}, action) {
    switch (action.type) {
        case REQUEST_INVOICES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_INVOICES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.invoices
            });
        case RECEIVE_INVOICES_ERROR:
            return Object.assign({}, state,{
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}