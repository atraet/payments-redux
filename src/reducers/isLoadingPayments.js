import {LOADING_PAYMENTS} from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case LOADING_PAYMENTS:
            console.log(`loadingPayments reducer: ${action.payload}`);
            return action.payload;
        default:
            return state;
    }
}