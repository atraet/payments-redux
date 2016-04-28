import {SELECT_PAYMENT, RECEIVE_PAYMENTS} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PAYMENT:
            return action.payload;
        case RECEIVE_PAYMENTS:
            let payments = action.payments;
            // If there is just one payment,
            // Select this payment
            return payments.length === 1
                ? payments[0].id
                : state;
        default:
            return state;
    }
}