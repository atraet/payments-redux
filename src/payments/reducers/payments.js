import {REQUEST_PAYMENTS, RECEIVE_PAYMENTS, RECEIVE_PAYMENTS_ERROR} from '../actions/types';

export default function (state = {
    isFetching: false,
    items: [],
    error: null
}, action) {
    switch (action.type) {
        case REQUEST_PAYMENTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_PAYMENTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payments
            });
        case RECEIVE_PAYMENTS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}