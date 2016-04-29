import {SELECT_PERIOD, RECEIVE_PAYMENTS} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PERIOD:
            return action.payload;
        case RECEIVE_PAYMENTS:
            let payments = action.payments;
            // If there is just one payment,
            // Select period type 1
            return payments.length === 1
                ? 1
                : state;
        default:
            return state;
    }
}
