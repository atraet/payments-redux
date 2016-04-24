import {SELECT_PERIOD, FETCH_PAYMENTS} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_PERIOD:
            return action.payload;
        case FETCH_PAYMENTS:
            let payments = action.payload.data;
            // If there is just one payment,
            // Select period type 1
            return payments.length === 1
                ? 1
                : state;
        default:
            return state;
    }
}
